import React from 'react';
import Navbar from '../Navbar';

const TipPosting = () => {
    return(
        <div>
            <Navbar />
            <table border={1}>
                <thead>
                    <tr>
                    <th></th>
                    <button className='group2'><img src="/img/Group2.png" alt="group"/></button>
                    </tr>
                </thead>
            </table>
                <thead>
                <textarea className='text' placeholder="내용을 입력하세요."></textarea>
                </thead>
                <button className='up'>올리기</button> 
        </div>
    )
}

export default TipPosting;