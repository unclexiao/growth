// pages/index/panel/panel.js

Page({
    data: {
        list: []
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        try {
            var detail = wx.getStorageSync('options');
            this.setData({ list: detail });
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
