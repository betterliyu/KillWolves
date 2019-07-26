//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  showCards: function() {
    wx.redirectTo({
      url: '../cards/cards'
    })
  },
  onLoad: function () { }
})
