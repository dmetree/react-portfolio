import React, { Component } from 'react';
import s from './MeasureLuck.module.css';

import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';
import * as cast from '../../store/diceRandom';

class MeasureLuck extends Component {


    render() {

        let summOfCasts = 0;
        for (let i = 0; i < this.props.arrayOfResults.length; i++) {
            summOfCasts = summOfCasts + this.props.arrayOfResults[i];
        }

        let luck = summOfCasts / this.props.arrayOfResults.length;
        let averageLuck = (luck - 3.5);
        
        let averageLuckPct = Math.floor(averageLuck / (2.5 / 100));

        // console.log(summOfCasts);
        // console.log(luck);
        // console.log(averageLuck);
        // console.log(averageLuckPct);


        
        let LuckBlock = () => {
            if (averageLuck > 0) {
                return <p> This time your luck is {averageLuckPct} % above average </p>;
            } else if (averageLuck === 0) {
                return <p> Your luck is average!</p>;
            } else if (averageLuck < 0) {
                return <p> This time your luck is  {averageLuckPct} % below average </p>;
            } else {
                return <p> You can measure your luck here! </p>;
            }
           
        }

    


        return (
            <div className={s.MeasureLuck}>
                <LuckBlock></LuckBlock>
                <button className={s.throwBtn} onClick={this.props.onCast}>Throw dice</button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        arrayOfResults: state.arrayOfResults
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onCast: () => dispatch({ type: actionTypes.ADDNEWCAST, playerCast: cast.randomCast() }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeasureLuck);
