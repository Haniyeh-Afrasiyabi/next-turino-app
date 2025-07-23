import api from "../config/api";
// import axios from "axios";

const API_BASE_URL = "http://localhost:6500"; // آدرس اصلی API

export const login = async (data) => {
  const response = await api.post(`${API_BASE_URL}/auth/send-otp`, data);
  return response.data;
};

export const checkOtp = async (data) => {
  const response = await api.post(`${API_BASE_URL}/auth/check-otp`, data);
  return response.data;
};

export const submitOrder = async (passengerData) => {
  const response = await api.post(`${API_BASE_URL}/order`, passengerData);
  return response.data;
};

export const userTours  = async (data) => {
  const response = await api.get(`${API_BASE_URL}/user/tours`, data);
  return response.data;
};

export const userTransactions  = async (data) => {
  const response = await api.get(`${API_BASE_URL}/user/transactions`, data);
  return response.data;
};