import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getcurrentuser } from "../services/auth.sevice";
import { setUserData } from "../Redux/UserSclice";

const useGetCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getcurrentuser();

        dispatch(setUserData(response));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [dispatch]);
};

export default useGetCurrentUser;
