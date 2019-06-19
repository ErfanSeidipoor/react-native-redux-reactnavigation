import { ACTION1 } from '../actionTypes'

export const addItem = item => {
    return {
        type: ACTION1,
        payload: item
    };
};