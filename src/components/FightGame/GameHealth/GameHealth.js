import React from 'react';
import s from './GameHealth.module.css';



const GameHealth = (props) => (
    <div className={s.CounterOutput}>
        {props.playerName}: {props.value}
        <div className={s.healthBar}>
            <div className={s.healthBarHeart} style={{ width: props.value + '%' }}></div>
        </div>
    </div>
);

export default GameHealth;