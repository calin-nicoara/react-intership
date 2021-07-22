import {Fragment, useState} from "react";
import NewUserForm from "./NewUserForm";
import UserFormError from "./UserFormError";
import UserList from "./UserList";

export default function UserManagement() {
  const [userList, setUserList] = useState([]);

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