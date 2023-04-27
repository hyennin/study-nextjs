import React from "react";
import Navbar from "./Navbar";

const DiaryList = () => {
  return (
    <div>
      <Navbar/>
      <div className="post">
        <p>우리 아가의 이야기를 기록해보세요.</p>
      </div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
};

export default DiaryList;
