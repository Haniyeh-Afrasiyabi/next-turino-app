// import axios from "axios";

// import { getCookie, setCookie} from "../utils/cookie";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   (request) => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       request.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const orginialRequest = error.config;
//     if (error.response.status === 401 && !orginialRequest._retry) {
//       orginialRequest._retry = true;

//       const res = await getNewTokens();
//       if (res?.response?.status === 201) {
//         setCookie("accessToken", res?.response?.data.accessToken, 30);
//         setCookie("refreshToken", res?.response?.data.refreshToken, 360);
//         return api(orginialRequest);
//       } else {
//         setCookie("accessToken", "", 0);
//         setCookie("refreshToken", "", 0);
//       }
//     }
//     return Promise.reject(error.response.data);
//   }
// );

// export default api;

// const getNewTokens = async () => {
//   const refreshToken = getCookie("refreshToken");
//   if (!refreshToken) return;
//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
//       {
//         refreshToken,
//       }
//     );
//     return { response };
//   } catch (error) {
//     return { error };
//   }
// };

import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization Header
api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

// Handle 401 + Refresh Token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      console.error("Network error or CORS issue:", error);
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await getNewTokens();
        if (res?.status === 201) {
          const { accessToken, refreshToken } = res.data;
          setCookie("accessToken", accessToken, 30);
          setCookie("refreshToken", refreshToken, 360);

          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return api(originalRequest);
        } else {
          // setCookie("accessToken", "", 0);
          // setCookie("refreshToken", "", 0);
          // فعلاً برای تست، پاک نکن تا دلیل خروج یوزر رو بفهمیم
          // یا فقط پیام نمایش بده، نه پاک کردن کوکی
          console.warn("Refresh token failed. Not clearing cookies for now.");
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error.response?.data || error);
  }
);

export default api;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  return axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`, {
      refreshToken,
    })
    .then((res) => res)
    .catch((err) => {
      console.error("Failed to refresh token:", err);
      return null;
    });
};
