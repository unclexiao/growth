// pages/index/panel/panel.js

var app = getApp()

Page({
    data: {
        list: [],
        title: 'Growth',      
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        try {
            var detail = wx.getStorageSync('options');
            this.setData({ list: detail });
        } catch (e) {
        }

        // 获取 subTitle，并拼接完整 title 作为分享 title
        this.setFullTitle(options.name,options.subTitle); 
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

    // 根据 name 、 subTitle 拼接完整 title，并作为分享 title
    // TBD 之后把这类公用方法整合到 app.js 中，提高复用
    setFullTitle: function(name,subTitle) {     
      this.setData({ title: subTitle + app.utils.getTitle(name) })
      wx.setNavigationBarTitle({
        title: this.data.title
      })
    },

    // TBD 目前是假的文章页分享
    // TBD 有待完善，由于无法通过参数进入具体文章，暂时先返回上一级列表
    onShareAppMessage: function () {
      return {
        title: this.data.title,
        path: '/pages/index/list/list?name=project',
        success: function (res) {
          // 分享成功
        },
        fail: function (res) {
          // 分享失败
        }
      }
    },
    setClipboardData: function (e) {
        //复制链接
        var url = e.currentTarget.dataset.url;
        wx.setClipboardData({
            data: url,
            success: function (res) {
                wx.showToast({
                    title: '链接已复制',
                    icon: 'success',
                    duration: 2000
                })
            }
        })
    }
})

