import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Our Users : {users.length} </h2>
      <p>Our total users are 10k</p>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default users;
