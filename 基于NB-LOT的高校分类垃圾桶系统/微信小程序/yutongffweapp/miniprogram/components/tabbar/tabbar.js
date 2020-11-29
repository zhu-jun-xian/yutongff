// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0,
    color: "#00f",
    selectedColor: "#ff0",
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/hone-active.png"
      },
      {
        "pagePath": "pages/indexdemo/index",
        "text": "",
        "iconPath": "images/orders.png",
        "selectedIconPath": "images/orders-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      let url = e.currentTarget.dataset.url
      let index = e.currentTarget.dataset.index
      wx.switchTab({
        url
      })
      // this.setData({
      //   curIndex:index
      // })
      wx.setStorageSync('curIndex', index)
    },
  }
})
