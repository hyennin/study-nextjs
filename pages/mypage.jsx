import React from "react";
import Navbar from "@component/pages/Navbar.js";
import profile from "@component/styles/img/profile.png";

const MyPage = () => {
  return (
    <>
      <Navbar />
      <div className="img">
        <img className="img-1" src={profile} alt="프로필"/>
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
