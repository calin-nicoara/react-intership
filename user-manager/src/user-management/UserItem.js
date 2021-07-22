export default function UserItem({username, age}) {
  return (
    <div className='user'>
      <div>Username: {username}</div>
      <div>Age: {age}</div>
    </div>
  )
}