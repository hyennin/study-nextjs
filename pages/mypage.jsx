import React, { useContext } from "react";
import Navbar from "./Navbar";
import styles from "../styles/MyPage.module.css"
import { UserContext } from "@/context/UserContext";

const MyPage = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <>
      <Navbar />
      <div className={`${styles.img}`}>
        <img className={`${styles['img-1']}`} src="profile.png" alt="프로필"/>
      </div>
      <div>
        <p className={`${styles.text}`}>
          {`닉네임 : ${user[0].nickname}`}
          <br /> {`아이디 : ${user[0].id}`}
        </p>
      </div>
      <button className={`${styles.button}`}>정보수정</button>
      <button className={`${styles.button}`}>저장</button>
    </>
  );
};

export default MyPage;