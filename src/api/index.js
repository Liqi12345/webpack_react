import request from '../lib/request'

export function findDeviceQRCode(data,method='get'){
	data = Object.assign({
		game_code:'drf520'
	},data)
	return request({
		url:'https://vote.51takeit.com/api/games/cuts/findDeviceQRCode',
		params:data,
		method
	})
}

export function getMyPrize(data = {},method='get'){
	return request({
		url:'https://mp.youxi3.cn/act/tel_integ/202006/tel_nethall/prize/myPrize.jsp',
		params:data,
		method
	})
}
