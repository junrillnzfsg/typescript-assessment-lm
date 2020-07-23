import { AppEvents } from "../events";
import { IAction } from "../actions";
import { IAppUser } from "../store";

const AppState: IAppUser = {
    name: '',
    age: 0,
};

export const reducer = (
    state = AppState,
    action: IAction,
): IAppUser => {
    switch (action.type) {
        case AppEvents.SET_NAME: {
            return { ...state, name: action.payload };
        }
        case AppEvents.SET_AGE: {
            return { ...state, age: action.payload};
        }
        default: return state;
    }
}