import _ from "lodash";

import { FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAMS } from "../actions/types";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};

        case DELETE_STREAM:
            return _.omit(state, action.payload);
            
        case FETCH_STREAMS:
            // _.mapKeys pega a chave no segundo parametro e transforma em propriedade
            //EX: [{ id : 1}, {id: 2}] para {1: {id: 1}, 2: {id: 2}}
            return {...state, ..._.mapKeys(action.payload, 'id')};

        default:
            return state;
    }
};