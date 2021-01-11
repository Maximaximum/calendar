const eventsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_EVENTS_ERR':
      console.log('error');
      return state;

    case 'GET_EVENTS_OK':
      state = action.events;
      console.log('ok', state);
      return state;

    case 'ADD_EVENT_ERR':
      console.log('error');
      return state;

    case 'DELETE_EVENT_ERR':
      console.log('error');
      return state;

    default:
      return state;
  }
}

export default eventsReducer;