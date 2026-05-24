import axios from "axios"

export const addExpence = (data) => {
  return axios.post("/api/add-expence", data)
}

export const getAllActiveExpence = () => {
  return axios.get("/api/get-active-expence")
}

export const updateExpence = (id, data) => {
  return axios.patch(`/api/update-expence/${id}`, data)
}

export const deleteExpence = (id) => {
  return axios.delete(`/api/delete-expence/${id}`)
}

export const getAllInactiveExpence = () => {
  return axios.get("/api/get-inactive-expence")
}

export const restoreDeletedExpence = (id) => {
  return axios.patch(`/api/restore-deleted-expence/${id}`)
}