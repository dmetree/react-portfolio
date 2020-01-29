import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameButton from './GameButtons/GameButton';
import GameHealth from './GameHealth/GameHealth';
import GameStatus from './GameStatus/GameStatus';
import s from './FightGame.module.css';


import * as actionTypes from './../../store/actions';
import * as hits from './../../store/generalLets';

class FightGame extends Component {

    render() {

        return (
            <div>
                <div className={s.healthTab}>
                    <GameHealth value={this.props.heroHP} playerName="Hero" />
                    <GameHealth value={this.props.bossHP} playerName="Boss" />
                </div>

                <GameStatus />

                <GameButton label="Hit" clicked={this.props.onHit} />
                <GameButton label="Punch" clicked={this.props.onPunch} />
                <GameButton label="Heal" clicked={this.props.onHeal} />
                <GameButton label="Restart" clicked={this.props.onRestart} />
                <hr />
                <GameButton label="Store Result" clicked={this.props.onStoreResult} />
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            className="listItem"
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.val}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        heroHP: state.heroHP,
        bossHP: state.bossHP,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onHit: () => dispatch({ type: actionTypes.HIT, heroHit: hits.ordinaryHit(), enemyHit: hits.ordinaryHit() }),
        onPunch: () => dispatch({ type: actionTypes.PUNCH, heroPunch: hits.ordinaryPunch(), enemyHit: hits.ordinaryHit() }),
        onHeal: () => dispatch({ type: actionTypes.HEAL, heroHeal: hits.ordinaryHeal(), enemyHit: hits.ordinaryHit() }),
        onRestart: () => dispatch({ type: actionTypes.RESTART }),

        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FightGame);
