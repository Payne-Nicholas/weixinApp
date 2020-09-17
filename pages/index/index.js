//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '9988',
    person: {
      name: 'tony',
      age: 17
    },
    books:[
      '三国演义',
      '水浒传'
    ],
    weather:'阴天'
  },
  onLoad: function () {

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})