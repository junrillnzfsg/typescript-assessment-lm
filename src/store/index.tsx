import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

export interface IAppUser {
  name: string;
  age: number;
}

export interface IAppState {
  app: IAppUser;
}

const reducers = combineReducers({
  app: AppReducer,

});
const store = createStore(reducers);

export { store };