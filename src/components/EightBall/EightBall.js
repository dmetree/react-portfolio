import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './EightBall.module.css';

import * as actionTypes from './../../store/actions';
import * as cast from '../../store/diceRandom';


class EightBall extends Component {
    render() {
        let getProphesy = () => {
            if (this.props.answerNumber === 1) {
                return this.props.prophesies[0];
            } else if (this.props.answerNumber === 2) {
                return this.props.prophesies[1];
            } else if (this.props.answerNumber === 3) {
                return this.props.prophesies[2];
            } else if (this.props.answerNumber === 4) {
                return this.props.prophesies[3];
            } else if (this.props.answerNumber === 5) {
                return this.props.prophesies[4];
            } else if (this.props.answerNumber === 6) {
                return this.props.prophesies[5];
            } else if (this.props.answerNumber === 7) {
                return this.props.prophesies[6];
            }
        }

        let post =
            < div className={s.EightBall} >
                <div id="card" onClick={this.props.onCast} className={s.card}>
                    <p id="content" className={s.content}>{getProphesy()}</p>
                </div>
                <button id="askMe" className={s.askMe} onClick={this.props.onCast} >Ask Me</button>
            </div>
        return post;
    }
}


const mapStateToProps = state => {
    return {
        answerNumber: state.answerNumber,
        prophesies: state.prophesies
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onCast: () => dispatch({ type: actionTypes.NEWPROPHESY, oracleCast: cast.randomCast() }),
    };
};

// Using redux here certainly is an over kill. But i'm practicing. So that must be okay. 
export default connect(mapStateToProps, mapDispatchToProps)(EightBall);
