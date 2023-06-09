import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/member/getList',
    method: 'post',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/member/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/member/doDelete',
    method: 'post',
    data,
  })
}
