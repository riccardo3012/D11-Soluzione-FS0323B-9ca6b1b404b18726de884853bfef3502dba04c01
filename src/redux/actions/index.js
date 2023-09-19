export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const FILTERS_SEARCH = "FILTERS_SEARCH";

export const addToFavoritesAction = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavoritesAction = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        //   setJobs(data);
        dispatch({ type: GET_JOBS, payload: data });
        console.log("DATA", data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateFiltersSearchAction = (filters) => ({
  type: FILTERS_SEARCH,
  payload: filters,
});
