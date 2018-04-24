import { searchAllAdverts } from '../../../api';

export const SEARCH_ADVERTS_REQUEST = 'SEARCH_ADVERTS_REQUEST';
export const SEARCH_ADVERTS_RESPONSE = 'SEARCH_ADVERTS_RESPONSE';
export const SET_FILTERS = 'SET_FILTERS';

export const searchAdverts = query => async (dispatch) => {
    dispatch({ type: SEARCH_ADVERTS_REQUEST });

    const allAdverts = await searchAllAdverts(query);

    dispatch({ type: SEARCH_ADVERTS_RESPONSE, allAdverts });
};

export const setFilters = filters => async dispatch => {
    dispatch({ type: SET_FILTERS, filters });
};
