import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "./User";

export const Users = () => {
  const [appState, setAppState] = useState();

  const loadUsers = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await axios.get(apiUrl);
      setAppState(response.data);
    } catch (e) {
      setAppState(e.message);
    }
  };

  
  useEffect(() => {
    loadUsers()
  }, [setAppState]);

  return (
    <>
      <User users={appState} />
    </>
  );
};