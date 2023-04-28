import React, { useState } from 'react';
import styled from "styled-components";
import Navbar from './Navbar';
import styles from '../styles/TipList.module.css';

const TipList = () => {
    const [isClick, setIsClick] = useState(false);

    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Navbar/>
            <Button href="/tip/posting">당신의 팁을 들려주세요</Button>
            <div className={`${styles['communi-box']}`}>
                아이가 잠을 안 잘때!                              
                <img src={isClick? "pink_heart.png": "heart.png"} alt='img' onClick={click_heart} className={`${styles.heart}`}/>             
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
export default TipList;