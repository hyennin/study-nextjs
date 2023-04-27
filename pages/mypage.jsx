import React from "react";
import Navbar from "@/pages/Navbar.js";

const MyPage = () => {
  return (
    <>
      <Navbar />
      <div className="img">
        <img className="img-1" src="/img/profile.png" alt="프로필"/>
      </div>
      <div>
        <p className="text">
          닉네임 : 설윤 맘미
          <br /> 아이디 : smom.546
          <br /> 생일 : 2006.02.03
        </p>
      </div>
    </>
  );
};

export default MyPage;
