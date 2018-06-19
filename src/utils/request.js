import wx from '@/utils/wx'
import Fly from 'flyio'

const request = new Fly()

// request.config.baseURL="https://wendux.github.io/"

request.interceptors.request.use(config => {
	wx.showNavigationBarLoading()
	config.headers["X-Tag"]="flyio"
  return config
})

request.interceptors.response.use(
	(response, promise) => {
		wx.hideNavigationBarLoading()
		return promise.resolve(response.data)
	},
	(err, promise) => {
		wx.hideNavigationBarLoading()
		wx.showToast({
			title: err.message,
			icon: 'none'
		})
		return promise.resolve()
	}
)

export default request
