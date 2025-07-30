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
  const res = await fetch("http://localhost:6500/tour", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch tours");
  return res.json();
};

export const getTourById = async (tourId) => {
  const response = await api.get(`/tour/${tourId}`);
  return response.data;
};

export const addToBasket = async (tourId) => {
  const response = await api.put(`/basket/${tourId}`);
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
