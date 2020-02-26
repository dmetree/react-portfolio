import * as actionTypes from './actions';

const initialState = {
    // Fight Game State 
    heroHP: 100,
    bossHP: 100,
    results: [],

    // EightBall State
    answerNumber: null,
    prophesies: ["Yes", "No", "Maybe", "Ask later", "I guess, you know", "Soon you'll see"],


    // MeasureLuck State
    arrayOfResults: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {


        // On-Hero Actions ====================================>    
        case actionTypes.HIT:
            return {
                ...state,
                bossHP: state.bossHP - action.heroHit,
                heroHP: state.heroHP - action.enemyHit
            }
        case actionTypes.PUNCH:
            return {
                ...state,
                bossHP: state.bossHP - action.heroPunch,
                heroHP: state.heroHP - action.enemyHit
            }
        case actionTypes.HEAL:
            return {
                ...state,
                heroHP: state.heroHP + action.heroHeal - action.enemyHit
            }
        case actionTypes.RESTART:
            return {
                ...state,
                bossHP: state.bossHP * 0 + 100,
                heroHP: state.heroHP * 0 + 100
            }

        // Store result ====================================>    

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date() * Math.random(), val: state.heroHP })
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }

        // ===========================================>   
        // 8-Ball ====================================>    
        // ===========================================>   
        case actionTypes.NEWPROPHESY:
            return {
                ...state,
                answerNumber: state.answerNumber * 0 + action.oracleCast,
            }

        // ===========================================>   
        // Measure your luck =========================> 
        // ===========================================>   
    
        case actionTypes.ADDNEWCAST:
            return{
                ...state,
                arrayOfResults: state.arrayOfResults.concat(action.playerCast),
            }
        
        default:
            return state;
    }
}

export default reducer;