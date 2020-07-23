import { ActionCreatorsMapObject } from 'redux';
import { AppEvents } from "../events";
import { IAppUser } from "../store";

interface Action<T extends string> {
    type: T;
}

interface Payload<T extends string, P> extends Action<T> {
    payload: P;
}

function makeAction<T extends string, P>(
    type: T,
    payload: P,
): Payload<T, P>;

function makeAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}

export const SetName = (name: IAppUser['name']) => makeAction(AppEvents.SET_NAME, name);
export const SetAge = (age: IAppUser['age']) => makeAction(AppEvents.SET_AGE, age);
export const Action = { SetName, SetAge };

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>
export type IAction = ActionsUnion<typeof Action>;