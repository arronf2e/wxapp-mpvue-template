import request from '@/utils/request'

const baseUrlApi = 'https://api.ithome.com'

const api = {
  getNewsList: (r) => request.get('/json/newslist/news', null, {
    baseURL: baseUrlApi
  }),
}

export default api