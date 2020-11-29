// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:20,
  },
//方法
gosearch:function(){
  wx.navigateTo({
    url: '../search/search',
  })
  },
  // 扫描垃圾桶二维码
  OnBindScan:function(e){  
    wx.scanCode({
       onlyFromCamera: true,
       success(res) {
         console.log(res),
         console.log(res.result),
           wx.showToast({
             title: '扫码成功',
             duration: 1000
           })
         wx.navigateTo({
           url: '../rubbishDetail/rubbishDetail'
         });
       },
       fail(res){
         wx.showToast({
           title: '扫码失败',
           duration: 1000
         })
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