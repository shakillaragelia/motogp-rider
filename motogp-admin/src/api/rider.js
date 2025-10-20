import request from '@/utils/request'

export function fetchRiders() {
  return request({
    url: 'http://localhost:3000/riders', 
    method: 'get'
  })
}

export function createRider(data) {
  return request({
    url: 'http://localhost:3000/riders',
    method: 'post',
    data
  })
}

export function updateRider(id, data) {
  return request({
    url: `http://localhost:3000/riders/${id}`,
    method: 'put',
    data
  })
}

export function deleteRider(id) {
  return request({
    url: `http://localhost:3000/riders/${id}`,
    method: 'delete'
  })
}