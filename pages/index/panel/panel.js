// pages/index/panel/panel.js

var data = {
  'MVC': [{
    name: 'TODO-MVC',
    desc: 'Helping you select an MV* framework - Todo apps for Backbone.js, Ember.js, AngularJS, and many more',
    url: 'https://github.com/tastejs/todomvc'
  }],
  'React': [{
    name: 'Awesome React',
    desc: 'A collection of awesome things regarding React ecosystem.',
    url: 'https://github.com/enaqx/awesome-react'
  },
  {
    name: 'React demo',
    desc: 'a collection of simple demos of React.js',
    url: 'https://github.com/ruanyf/react-demos'
  }, {
    name: 'React同构',
    desc: 'ReactJS + NodeJS ( express ) demo tutorial with video. Universal/Isomorphic JS = Shared JavaScript that runs on both the client & server.',
    url: 'https://github.com/DavidWells/isomorphic-react-example'
  }]
}
Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      list: data[options.key]
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
  }
})
