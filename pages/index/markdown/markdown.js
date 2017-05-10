// markdown.js
var WxParse = require('../../../common/wxParse/wxParse.js'),
  request = require('../../../common/request.js');
var that = this;
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
    try {
      var detail = wx.getStorageSync('options');
      request.request('articles/' + detail, 'GET', {}, function (res) {
        WxParse.wxParse('article', 'md', res, that, 5);
      })
    } catch (e) {
    }

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})