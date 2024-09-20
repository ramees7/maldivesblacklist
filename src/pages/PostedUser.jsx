import React from "react";
import UserLanding from "../components/PostedUser/UserLanding";
import FormUser from "../components/PostedUser/FormUser";
import UserMorePosts from "../components/PostedUser/UserMorePosts";

export default function PostedUser() {
  return (
    <div className="bg-[#f2f2f2]">
      <UserLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 py-10">
        <FormUser />
        <UserMorePosts />
      </div>
    </div>
  );
}
