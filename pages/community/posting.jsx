import React from 'react';
import Navbar from '../Navbar';
import styles from '../../styles/TipPosting.module.css';

const CommunityPosting = () => {
    return(
        <div>
            <Navbar />
            <table border={1}>
                <thead>
                    <tr>
                    <th></th>
                    <button className={`${styles.group2}`}><img src="Group2.png"/></button>
                    </tr>
                </thead>
            </table>
                <thead>
                <textarea className={`${styles.text}`} placeholder="내용을 입력하세요."></textarea>
                </thead>
                <button className={`${styles.up}`}>올리기</button>
            

           
        </div>
    )
}

export default CommunityPosting;