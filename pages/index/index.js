// pages/index/index.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  onShareAppMessage: function () {
    return {
      title: '带你成为优秀开发者',
      path: '/pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },
  clickHandler: function (e) {
    var menu = e.currentTarget.dataset.menu;
    switch (menu) {
      case 'learn':
        wx.navigateTo({
          url: 'article/article'
        });
        break;
      case 'project':
        wx.navigateTo({
          url: 'list/list?name=project'
        });
        break;
      case 'tool':
        wx.navigateTo({
          url: 'list/list?name=tool'
        });
        break;
      default:
        wx.showToast({
          title: '即将上线',
          icon: 'loading',
          duration: 2000
        });
    }
  }
})