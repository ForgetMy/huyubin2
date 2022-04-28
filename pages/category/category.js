import myrequest from "../../utils/myrequest"
// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftCon:[],
    children:[],
    title:''
  },
  hit(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onChange(e){
    let n = e.currentTarget.dataset.i
    this.setData({
      title:this.data.navLeftCon[n].cat_name,
      title:this.data.navLeftCon[n].children[0].cat_name,
      children: this.data.navLeftCon[n].children[0].children
    })
  },
  async getnavLeftCon(){
    let {data} = await myrequest({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
    })
    // console.log(data)
    this.setData({
      navLeftCon:data.message,
      title:data.message[0].cat_name,
      children: data.message[0].children[0].children
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnavLeftCon()
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