import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const InfoUser = () => {
  const infoUser = useParams();
  const [user, setUser] = useState();


  const loadInfoUser = async () => {
    const Url = `https://jsonplaceholder.typicode.com/users/${infoUser.id}`;
    try {
      const response = await axios.get(Url);
      setUser(response.data);
    } catch (e) {
      setUser(e.message);
    }
  };




  useEffect(() => {
    loadInfoUser()
  }, [setUser]);

  

  return (
    <div>
      {user ? 
        <div className="info-user">
          <p>{user.name}</p>
          <p>Nik: {user.username}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
        </div>
       : 
        false
      }
    </div>
  );
};