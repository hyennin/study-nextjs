import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from "styled-components"
import styles from '../styles/Community.module.css'

const CommunityList = () => {
    const [isClick, setIsClick] = useState(false);
    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Navbar />
            <a className={`${styles.postingBtn}`} href="/community/posting">당신의 이야기를 들려주세요</a>
            <div className={`${styles['communi-box']}`}>
                산후 우울증에 대해...      
                <img src={isClick? "pink_heart.png" : "heart.png"} alt='img' onClick={click_heart} className={`${styles.heart}`}/>               
                <img className={`${styles.communi}`} src="communi.png" alt="communi"/>                
            </div>
        </div>
    );
};

export default CommunityList;