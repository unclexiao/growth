// pages/about/about.js
Page({
    data: {
        members: [
            {
                name: 'phodal',
                icon: '/images/members/phodal.jpg',
                desc: '待我代码编成，娶你为妻可好'
            },
            {
                name: 'unclexiao',
                icon: '/images/members/unclexiao.jpg',
                desc: '用最意思的方式提高认知，根本停不下来'
            },
            {
                name: 'oathsign',
                icon: '/images/members/oathsign.jpg',
                desc: '软件工程师/全栈工程师/冒险家/死宅'
            },
            {
                name: 'ivanberry',
                icon: '/images/members/ivan.jpg',
                desc: '矿物加工专业出生，热爱前端，行进在精通CSS的路上，即将成为JavaScript大神'
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
    setClipboardData: function (e) {
        //复制链接
        var url = e.currentTarget.dataset.number;
        wx.setClipboardData({
            data: url,
            success: function (res) {
                wx.showToast({
                    title: '群号已复制',
                    icon: 'success',
                    duration: 2000
                })
            }
        })
    }
})