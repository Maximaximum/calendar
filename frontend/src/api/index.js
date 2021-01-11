import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const addEvent = (payload) => api.post(`/event`, payload)
export const getEvents = (payload) => api.post(`/events`, payload)
export const deleteEvent = (id) => api.delete(`/event/${id}`)
export const downloadEvents = (user) => api.get(`/events/download/${user}`)

export const addUser = (payload) => api.post(`/user`, payload)
export const getUser = (payload) => api.post(`/user/${payload.login}`, payload)

const apis = {
  addEvent,
  getEvents,
  deleteEvent,
  downloadEvents,

  addUser,
  getUser,
}

export default apis