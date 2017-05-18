
App({
  onLaunch: function () {
  
  },

  // 全局辅助方法
  utils: {
    getTitle: function (name) {
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
  }
})
