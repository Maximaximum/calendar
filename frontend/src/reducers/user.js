import api from '../api';

export const userLog = () => async (dispatch, getState) => {
  const user = await api.getUser({ login: 'mark', password: 'qwerty'});
  return {
    type: "USER_LOG_OK",
    user: user.data
  }
}