// pages/tree/tree.js
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
  clickHandler: function (e) {
    wx.previewImage({
      current: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1494017528&di=854b379fb234a61fc96e06a6d84166b2&src=http://7xvjap.com1.z0.glb.clouddn.com/2016-03-05-01.jpg', // 当前显示图片的http链接
      urls: ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1494017528&di=854b379fb234a61fc96e06a6d84166b2&src=http://7xvjap.com1.z0.glb.clouddn.com/2016-03-05-01.jpg'] // 需要预览的图片http链接列表
    })
  }
})