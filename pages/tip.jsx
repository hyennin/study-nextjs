import React, { useState } from 'react';
import styled from "styled-components";
import Navbar from './Navbar';
import styles from '../styles/Tip.module.css';

const TipList = () => {
    const [isClick, setIsClick] = useState(false);

    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Navbar/>
            <a className={`${styles.postingBtn}`} href="/tip/posting">당신의 팁을 들려주세요</a>
            <div className={`${styles['communi-box']}`}>
                아이가 잠을 안 잘때!                              
                <img src={isClick? "pink_heart.png": "heart.png"} alt='img' onClick={click_heart} className={`${styles.heart}`}/>             
                <img className={`${styles.communi}`} src="communi.png" alt="communi"/>            
            </div>
        </div>
    );
};

export default TipList;