// pages/index/list/list.js


Page({
  data: {
    name: 'project',
    projectList: ['MVC', 'React'],
    toolList: ['API设计', '后台', 'Chorme插件', '命令行工具', '文档', '图形工具', 'DebOps', '科学工具']
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      name: options.name
    })
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
    var key = e.currentTarget.dataset.key;
    wx.navigateTo({
      url: '../panel/panel?key='+key
    });
  }
})