import  * as actionTypes from './actionTypes'
import DISHES from "../Data/dishes";
import dishes from "../Data/dishes";
import {type} from "@testing-library/user-event/dist/type";


export const addComment =( dishId, author, rating, comment ) => ( {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
     }
});

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
});


export const dishLoading = () => ({
    type: actionTypes.DISHES_LOADING

});

export const fetchDishes = () =>dispatch => {
        dispatch(dishLoading());

        setTimeout(() => {
            dispatch(loadDishes(DISHES));
        },
            2000);
}