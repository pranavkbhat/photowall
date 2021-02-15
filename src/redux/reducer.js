import _posts from '../data/posts'
import {combineReducers} from 'redux'

function comments(state={}, action){
    switch(action.type){
        case 'add_comment': 
        if(!state[action.postId]){
            return{...state, [action.postId]: [action.comment]}
        } else {
            return{...state, [action.postId]: [...state[action.postId], action.comment]}
        }
        case 'load_comments': return action.comments  
        default : return state
    }
}

function posts(state = _posts, action) {
    switch(action.type){
        case 'remove_post' : return [...state.slice(0,action.index), ...state.slice(action.index+1)]
        case 'add_post': return [...state, action.post]
        case 'load_posts': return action.posts
        default : return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer