import { TOGGLE_HELLO } from '../constants/helloWorld';

const initialState = {
    hello: 'Hello World'
};

export default function helloWorld(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_HELLO:
            return {
                ...state,
                hello: state.hello === 'Hello World' ? 'Привет, Мир' : 'Hello World'
            };
        default: {
            return state
        }
    }
}