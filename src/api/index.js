/* 
  包含接口的请求函数
    函数的返回值是一个promise对象
*/

import ajax from './ajax'

// 1.根据经纬度获取位置
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 2.获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')

// 3.根据经纬度获取商品列表
export const reqShops = (longitude, latitude) => ajax('/shops', { longitude, latitude })

// 4.根据经纬度和关键字搜索商铺列表
export const reqShopList = (geohash, keyword) => ajax('/search_shops', { geohash, keyword })

// 5.获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')

// 6.用户名密码登录
export const reqPassword = (name, pwd) => ajax('/login_pwd', { name, pwd })

// 7发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', { phone })

// 8.手机号验证码登录
export const reqPhoneCode = (phone, code) => ajax('/login_sms', { phone, code })

// 9.根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')

// 10.用户登录
export const reqUserLogout = () => ajax('/logout')