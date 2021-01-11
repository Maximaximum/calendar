const eventsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_EVENTS_ERR':
      return state;

    case 'GET_EVENTS_OK':
      state = action.events;
      return state;

    case 'ADD_EVENT_ERR':
      return state;

    case 'DELETE_EVENT_ERR':
      return state;

    default:
      return state;
  }
}

export default eventsReducer;