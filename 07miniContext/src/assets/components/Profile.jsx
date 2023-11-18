import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/context";

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div>PLease Login...</div>

  return <div>Welcome {user.username}</div>
}
export default Profile