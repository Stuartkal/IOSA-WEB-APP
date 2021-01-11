import * as actionTypes from '../Action'
import {updateObject} from './utility'


const intitialState = {
    username:'',
    userId:'',
    token:'',
    authenticated: false,
    loading: false,
    error: false
}

const auth = (state = intitialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_ACTION:
            return updateObject(state, {
                loading: true,
                authenticated: false
            })
            case actionTypes.LOGIN_SUCCESS:
            return updateObject(state, {
                loading: false,
                username:action.username,
                userId:action.userId,
                token:action.token,
                authenticated: true
            })
            case actionTypes.LOGIN_FAIL:
            return updateObject(state, {
                loading: false,
                authenticated: false,
                error: true
            })
        default: return state
    }
}

export default auth

