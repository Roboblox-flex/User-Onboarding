import React from "react";

function User(props) {
  const { user } = props;
  // catch error
  if (!user) {
    return <h3>Working fetching your team members&apos;s details...</h3>;
  }

  return (
    //   return  team member
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
export default User;
