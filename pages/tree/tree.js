// pages/tree/tree.js
Page({
  data: {},
  onLoad: function (options) {
    //previrw();
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
    previrw();
  }
})

function previrw() {
  wx.previewImage({
    current: 'https://unclexiao.oschina.io/slash/img/front-end-tech-stack-2016.png', // 当前显示图片的http链接
    urls: ['https://unclexiao.oschina.io/slash/img/front-end-tech-stack-2016.png'] // 需要预览的图片http链接列表
  })
}