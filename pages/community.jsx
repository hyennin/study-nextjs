import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from "styled-components"
import styles from '../styles/Communication.module.css'

const CommunityList = () => {
    const [isClick, setIsClick] = useState(false);
    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Navbar />
            <Button href="/community/posting">당신의 이야기를 들려주세요</Button>
            <div className={`${styles['communi-box']}`}>
                산후 우울증에 대해...      
                <img src={isClick? "pink_heart.png" : "heart.png"} alt='img' onClick={click_heart} className={`${styles.heart}`}/>               
                <img className={`${styles.communi}`} src="communi.png" alt="communi"/>                
            </div>
        </div>
    );
};

const Button = styled.a`
    width: 100px;
    margin: auto;
    display: block;
    margin-top: 100px;
    width: 500px;
    height: 30px;
    border-radius: 30px;
    background-color: #FFF9E3;
    text-align: center;
    text-decoration: none;
    box-shadow: 5px 5px 5px rgb(145, 145, 145);
    color: #F6D697;
`;

export default CommunityList;