import UserItem from "./UserItem";

export default function UserList(props) {
  return (
    <div>
      {props.userList.map((user) =>
        <UserItem
          key={user.username}
          username={user.username}
          age={user.age}
        />
      )}
    </div>
    )
}