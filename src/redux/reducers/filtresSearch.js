import { FILTERS_SEARCH } from "../actions";

const initialState = {
  filtersSearch: {
    tipo: "",
    città: "",
    via: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_SEARCH:
      return {
        ...state,
        searchFilters: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
