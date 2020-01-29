import React from 'react';
import s from './GameButton.module.css';

const GameButton = (props) => (
    <div className={s.CounterControl} onClick={props.clicked}>
        {props.label}
    </div>
);

export default GameButton;