import  * as actionTypes from './actionTypes'
import {baseUrl} from "./baseUrl";
import axios from 'axios';


export const addComment =( dishId, author, rating, comment ) => ( {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment,
     }
});


export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());
}

function dispatch(loadComments1) {
    return undefined;
}

axios.get(baseUrl + 'comments')
    .then(response=>response.data)
    .then(comments => dispatch (loadComments(comments)))


export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
});


export const dishLoading = () => ({
    type: actionTypes.DISHES_LOADING

});

export const fetchDishes = () =>dispatch => {
        dispatch(dishLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)));
}