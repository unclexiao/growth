// pages/index/list/list.js

var that = null,
  menuName = '',
  request = require('../../../common/request.js');
Page({
  data: {
    list: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
    menuName = options.name;
  },
  onReady: function () {
    // 页面渲染完成
    request.request(getMenuUrl(menuName), 'GET', {}, function (res) {
      that.setData({
        list: res.content
      })
    });
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  clickHandler: function (e) {
    var key = e.currentTarget.dataset.key;
    wx.navigateTo({
      url: '../panel/panel?key=' + key
    });
  }
})

function getMenuUrl(name) {
  var url = '';
  switch (name) {
    case 'timeline':
      url = 'awesome/api/all.json';
      break;
    case 'project':
      url = 'growth-in-action/api/all.json';
      break;
    case 'tool':
      url = 'toolbox/api/all.json';
      break;
    case 'passage':
      url = 'articles/api/all.json';
      break;
  }
  return url;
}