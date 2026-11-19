import React, { useState } from "react";
import { LoginUser, logoutUser, registerUser } from "../services/auth.sevice";

const useauth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerhandler = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const data = await registerUser(userData);

      return data;
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const logouthandler = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await logoutUser();

      return data;
    } catch (error) {
      setError(error.response?.data?.message || "Logout Failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const loginhandler = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const data = await LoginUser(userData);

      return data;
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { registerhandler, loading, error, loginhandler, logouthandler };
};

export default useauth;
