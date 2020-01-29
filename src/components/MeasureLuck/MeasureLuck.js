import React, { Component } from 'react';
import s from './MeasureLuck.module.css';



class MeasureLuck extends Component {
    render() {
        return (
            <div className={s.MeasureLuck}>
                You can measure your luck here! 
                Just click this button.
            </div>
        );
    }
}

export default MeasureLuck;
