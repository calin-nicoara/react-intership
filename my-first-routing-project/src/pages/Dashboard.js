import {Route} from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <Route path="/dashboard/newUser">
        <h2>Welcome to the dashboard</h2>
      </Route>
    </div>
  )
}