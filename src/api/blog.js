import request from '../helpers/request.js'

const URL = {
  LIST: '/blog',
  DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

export default {
  getBlogs({page=1, userId, atIndex} = {page: 1}){
    return request(URL.LIST, 'GET', {page, userId, atIndex})
  },

  getIndexBlogs({page = 1} = {page: 1}){
    return this.getBlogs({page, atIndex: true})
  },

  getBlogByUserId(userId,{page=1, atIndex} = {page: 1}){
    return this.getBlogs(userId, page, atIndex)
  },

  getDetail({blogId}){
    return request(URL.DETAIL.replace(':blogId', blogId))
  },

  updateBlog({blogId},{title, content, decription, atIndex}){
    return request(URL.UPDATE.replace(':blogId', blogId), 'PATH', {title, content, decription, atIndex})
  },

  deleteBlog({blogId}){
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  },

  createBlog({title='', content='', description='', atIndex = true} = {title:'', content:'', description:'', atIndex: true}){
    return request(URL.CREATE,'POST', {title, content, description, atIndex})
  }
}