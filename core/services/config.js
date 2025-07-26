// import api from "../config/api";

// const API_BASE_URL = "http://localhost:6500"; // آدرس اصلی API

// export const login = async (data) => {
//   const response = await api.post(`${API_BASE_URL}/auth/send-otp`, data);
//   return response.data;
// };

// export const checkOtp = async (data) => {
//   const response = await api.post(`${API_BASE_URL}/auth/check-otp`, data);
//   return response.data;
// };

// export const getTours = async () => {
//   const response = await api.get(`${API_BASE_URL}/tour`, {
//     headers: { "Cache-Control": "no-store" },
//   });
//   return response.data;
// };

// export const submitOrder = async (passengerData) => {
//   const response = await api.post(`${API_BASE_URL}/order`, passengerData);
//   return response.data;
// };

// export const userTours = async (data) => {
//   const response = await api.get(`${API_BASE_URL}/user/tours`, data);
//   return response.data;
// };

// export const userTransactions = async (data) => {
//   const response = await api.get(`${API_BASE_URL}/user/transactions`, data);
//   return response.data;
// };

// export const userProfile = async (data) => {
//   const response = await api.get(`${API_BASE_URL}/user/profile`, data);
//   return response.data;
// };

// export const editProfile = async (data) => {
//   const response = await api.put(`${API_BASE_URL}/user/profile`, data);
//   return response.data;
// };

import api from "../config/api";

export const login = async (data) => {
  const response = await api.post("/auth/send-otp", data);
  return response.data;
};

export const checkOtp = async (data) => {
  const response = await api.post("/auth/check-otp", data);
  return response.data;
};

export const getTours = async () => {
  const response = await api.get("/tour", {
    headers: { "Cache-Control": "no-store" },
  });
  return response.data;
};

export const submitOrder = async (data) => {
  const response = await api.post("/order", data);
  return response.data;
};

export const userTours = async () => {
  const response = await api.get("/user/tours");
  return response.data;
};

export const userTransactions = async () => {
  const response = await api.get("/user/transactions");
  return response.data;
};

export const userProfile = async () => {
  const response = await api.get("/user/profile");
  return response.data;
};

export const editProfile = async (data) => {
  const response = await api.put("/user/profile", data);
  return response.data;
};
