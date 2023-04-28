import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/MyPage.module.css"

const MyPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.img}`}>
        <img className={`${styles['img-1']}`} src="profile.png" alt="프로필"/>
      </div>
      <div>
        <p className={`${styles.text}`}>
          닉네임 : 설윤 맘미
          <br /> 아이디 : smom.546
          <br /> 생일 : 2006.02.03
        </p>
      </div>
      <button className={`${styles.button}`}>정보수정</button>
      <button className={`${styles.button}`}>저장</button>
    </>
  );
};

export default MyPage;