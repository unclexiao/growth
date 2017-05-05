// pages/about/about.js
Page({
  data: {
    members: [
      {
        name: 'phodal',
        icon: '/images/members/phodal.jpg'
      },
      {
        name: 'unclexiao',
        icon: '/images/members/unclexiao.jpg'
      },
      {
        name: 'oathsign',
        icon: '/images/members/oathsign.jpg'
      },
      {
        name: 'ivan',
        icon: '/images/members/ivan.jpg'
      },
      {
        name: 'luodayou',
        icon: '/images/members/luodayou.jpg'
      }
    ]
  },
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
      title: '陪你成为顶尖开发者',
      path: '/pages/about/about',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },
})