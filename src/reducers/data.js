
const data = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      const list = state.data.categories[2].playlist;
      const results = list.filter((item) => item.author.includes(action.payload.query));
      return {
        ...state,
        search: results
      };
    }

    default:
      return state;
  }
};

export default data;
