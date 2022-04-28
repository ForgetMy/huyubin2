import myrequest from "../../utils/myrequest"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],  //轮播数据
    navList:[],   //导航数据
    floorList:[]  //楼层数据
  },
  hit(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //请求轮播数据
  async getlunboData(){
    let {data} = await myrequest({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    })
    this.setData({
      bannerList:data.message
    })
    console.log(data)
  },
  //请求导航数据
  async getnavData(){
    let {data} = await myrequest({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
    })
    this.setData({
      navList:data.message
    })
    console.log(data)
  },
  //请求楼层数据
  async getfloorData(){
    let {data} = await myrequest({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
    })
    this.setData({
      floorList:data.message
    })
    console.log(data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlunboData()
    this.getnavData()
    this.getfloorData()
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