// pages/index/list/list.js

var that = null,
  menuName = '',
  request = require('../../../common/request.js');
Page({
  data: {
    menu: '',
    list: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
    menuName = options.name;
    wx.setNavigationBarTitle({
      title: getTitle(menuName)
    })
  },
  onReady: function () {
    // 页面渲染完成
    request.request(getMenuUrl(menuName), 'GET', {}, function (res) {
      that.setData({
        list: res.content,
        menu: menuName
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
  onShareAppMessage: function () {
    return {
      title: getTitle(menuName),
      path: '/pages/index/list/list',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },
  clickHandler: function (e) {
    try {
      //参数无法传递参数，故而使用本地存储 
      wx.setStorageSync('options', getOptions(e.currentTarget.dataset));
    } catch (e) {
    }

    // 传递 subTitle 作为详情页 title 一部分
    var subTitle = e.currentTarget.dataset.title
    wx.navigateTo({
      url: getNavigateUrl(menuName) + '?name=' + menuName + '&subTitle=' + subTitle
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
      url = 'project/api/all.json';
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

function getNavigateUrl(name) {
  var url = '';
  switch (name) {
    case 'timeline':
      url = '../timeline/timeline';
      break;
    case 'project':
      url = '../panel/panel';
      break;
    default:
      url = '../markdown/markdown';
  }
  return url;
}

function getOptions(dataset) {
  var obj = {}, list = that.data.list;
  var index = dataset.index,
    i = dataset.i,
    j = dataset.j;
  switch (menuName) {
    case 'timeline':
      obj = list[index].timeline;
      break;
    case 'project':
      obj = list[i].subdomains[j].projects;
      break;
    default:
      obj = list[index].path;
  }
  return obj;
}

function getTitle(name) {
  var title = 'Growth';
  switch (name) {
    case 'timeline':
      title = '学习路线';
      break;
    case 'project':
      title = '练手项目';
      break;
    case 'tool':
      title = '高效工具';
      break;
    case 'passage':
      title = '文章精选';
      break;
  }
  return title;
}