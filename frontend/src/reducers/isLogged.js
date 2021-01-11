const loggedReducer = (state = '', action) => {
  switch(action.type) {
    case 'USER_REG_ERR':
      alert(action.message);
      return state;

    case 'USER_REG_OK':
      state = action.user;
      alert(action.message);
      return state;

    case 'USER_LOG_ERR':
      alert(action.message);
      return state;

    case 'USER_LOG_OK':
      state = action.user;
      alert(action.message);
      return state;

    default:
      return state;
  }
}

export default loggedReducer;