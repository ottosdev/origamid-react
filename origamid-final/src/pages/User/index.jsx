import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../../components/Feed";
import UserStatis from "./UserStatis";
import UserPhotoPost from "./UserPhotoPost";

export default function User() {
  return (
    <section className="container">
      <UserHeader />
    
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatis />} />
      </Routes>
    </section>
  );
}
