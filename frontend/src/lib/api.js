import axios from 'axios'

const baseUrl = '/api'

function withHeaders(){
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

export const getProfileIndex = () => {
  return axios.get('/api/auth/profilelist/', withHeaders())
}

export function getUserProfile(){
  return axios.get('/api/auth/profile/', withHeaders())
}

export function getPublicUserProfile(userId){
  return axios.get(`/api/auth/profile/${userId}/`, withHeaders())
}

export const getSinglePhoto = (photoId) => {
  return axios.get(`/api/photos/${photoId}/`)
}

export const followProfile = (userId, formData) => {
  return axios.post(`/api/auth/profile/${userId}/follows/`, formData, withHeaders())
}

export const unfollowProfile = (userId) => {
  return axios.delete(`/api/auth/profile/${userId}/follows/`, withHeaders())
}

export const createPhoto = (formData) => {
  return axios.post('/api/photos/', formData, withHeaders())
}

export const likePhoto = (photoId, formData) => {
  return axios.post(`/api/photos/${photoId}/likes/`, formData, withHeaders())
}

export const unlikePhoto = (photoId) => {
  return axios.delete(`/api/photos/${photoId}/likes/`, withHeaders())
}

export const createComment = (formData) => {
  return axios.post('/api/comments/', formData, withHeaders())
}

//Registration and Login requests

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export const loginUser = (formData) => {
  return axios.post('/api/auth/login/', formData )
}

export const registerMetaMaskUser = () => {
  console.log('SIGNUP!!🦄');
}