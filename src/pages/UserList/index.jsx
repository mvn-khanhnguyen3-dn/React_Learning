import React, { useEffect, useState } from "react";
import UserItem from '../../components/modules/UserItem'

export default function UserList() {
  const [userList, setUserList] = useState([]);
 
    useEffect(() => {
      const fetchData = () => {
      fetch("https://reqres.in/api/users?page=2")
        .then((res) => res.json())
        .then((result) => setUserList(result.data));
      };
      fetchData();
    }, []);
 
  return (
    <main>
      <div className="container">
        <h2>User List</h2>
        <div className="row">
          {userList.map((item) => (
            <li key={item.id}>
              <UserItem user={item}  />
            </li>
          ))}
        </div>
      </div>
    </main>
  );
}
