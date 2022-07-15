import DISHES from "../Data/dishes";
import COMMENTS from "../Data/Comments";

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
}


export   const Reducer = (state = initialState, action) => {
    return state;
}