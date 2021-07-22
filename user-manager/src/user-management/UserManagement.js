import {Fragment, useEffect, useState} from "react";
import NewUserForm from "./NewUserForm";
import UserFormError from "./UserFormError";
import UserList from "./UserList";

export default function UserManagement() {
  const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   fetch("https://457b0b79-de63-49ad-9c63-16ea0fd2497e.mock.pstmn.io/users")
  //     .then(response => response.json())
  //     .then(jsonInfo => {
  //       // JSON.stringify() // javascript object to json
  //       // JSON.parse() // json to javascript object
  //       console.log(jsonInfo);
  //       setUserList(jsonInfo);
  //     })
  // }, []);

  useEffect(async () => {
    const response = await fetch("https://457b0b79-de63-49ad-9c63-16ea0fd2497e.mock.pstmn.io/users");

    if(response.ok) {
      const json = await response.json();
      setUserList(json);
    }

  }, []);

  function onCreateUserHandler(user) {
    setUserList((prevUserList) => [...prevUserList, user]);
  }

  return (
    <Fragment>
      <NewUserForm onCreateUser={onCreateUserHandler}/>
      <UserList userList={userList}/>
    </Fragment>
  )
}