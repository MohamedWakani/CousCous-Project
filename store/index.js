import { combineReducers, createStore } from "redux";
const diceReducer = (state = {dice:1}, action) => {

    switch (action.type) {
        case "jouer":
            return {
                dice: Math.floor(Math.random() * 6 + 1)
            };

        default:
            return state;
    }
};
const rootReducer = combineReducers({
    dice: diceReducer
});
const store = createStore(rootReducer);
export default store;
