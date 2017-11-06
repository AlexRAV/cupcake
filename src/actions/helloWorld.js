import { TOGGLE_HELLO } from '../constants/helloWorld';

export function toggleHello() {
    return {
        type: TOGGLE_HELLO,
    }
}