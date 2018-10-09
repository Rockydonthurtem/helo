import React from "react";

const Dashboard = props => {
  console.log(props);
  return (
    <div>
      <p>Dashboard</p>
      <button onClick={() => props.register()}>Register</button>
      <button onClick={() => props.login()}>Login</button>
    </div>
  );
};

export default Dashboard;
