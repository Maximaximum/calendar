import api from '../api';

export const userLog = (dataFromUser = {}) => async (dispatch, getState) => {
  const user = await api.getUser(dataFromUser);
  user.data.login ? dispatch(userLogOk(user.data)) : dispatch(userLogErr(user.data.message));
}

export const userLogOk = (data) => {
  return {
    type: "USER_LOG_OK",
    user: data.login,
    message: data.message
  }
}

export const userLogErr = (message) => {
  return {
    type: "USER_LOG_ERR",
    message: message
  }
}

export const addUser = (dataFromUser = {}) => async (dispatch, getState) => {
  const user = await api.addUser(dataFromUser);
  user.data.success ? dispatch(userRegOk(user.data)) : dispatch(userRegErr(user.data.message));
}

export const userRegOk = (data) => {
  return {
    type: "USER_REG_OK",
    user: data.login,
    message: data.message
  }
}

export const userRegErr = (message) => {
  return {
    type: "USER_REG_ERR",
    message: message
  }
}

export const getEvents = (dataFromUser) => async (dispatch, getState) => {
  const events = await api.getEvents({ user: dataFromUser });
  events.data ? dispatch(getEventsOk(events.data.data)) : dispatch(getEventsErr());
}

export const getEventsOk = (events) => {
  return {
    type: "GET_EVENTS_OK",
    events: events
  }
}

export const getEventsErr = () => {
  return {
    type: "GET_EVENTS_ERR"
  }
}

export const addEvent = (dataFromUser = {}) => async (dispatch, getState) => {
  const events = await api.addEvent(dataFromUser);
  events.data.success ? dispatch(getEvents(getState().isLogged)) : dispatch(addEventErr());
}

export const addEventErr = () => {
  return {
    type: "ADD_EVENT_ERR"
  }
}

export const deleteEvent = (dataFromUser = {}) => async (dispatch, getState) => {
  const events = await api.deleteEvent(dataFromUser);
  events.data.success ? dispatch(getEvents(getState().isLogged)) : dispatch(addEventErr());
}

export const deleteEventErr = () => {
  return {
    type: "DELETE_EVENT_ERR"
  }
}