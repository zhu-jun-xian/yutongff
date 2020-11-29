// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue:'眼镜',
    datas:[]
  },
  searchgo:function(e){     
console.log(e.detail.value)
let that=this
let content
wx.request({
  url: 'https://api.tianapi.com/txapi/lajifenlei/index?key=d2500bf8e5d72513d5dff676df876854&word='+e.detail.value, 
  success: function (res) {
    if(res.data.code == 200){
    that.setData({
      datas: res.data.newslist
    })
  }else{
      that.setData({
        content: res.data.msg
      }) 
  }
  },
  fail: function (err) {
    console.log(err)
  }
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})