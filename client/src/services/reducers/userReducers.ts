import { AnyAction } from "redux";

interface IInitState {
 status: boolean;
}

const initialState:IInitState = {
    status: true
};

const userReducers = (state = initialState, action:AnyAction) => {
    return state;
}

export default userReducers;