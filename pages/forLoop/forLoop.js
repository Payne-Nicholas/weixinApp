// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lines: [{
      id: 1,
      name: 'Tony'
    }, {
      id: 2,
      name: 'Tom'
    }, {
      id: 3,
      name: 'KOB'
    }, {
      id: 4,
      name: 'BKH'
    }],
    list: [
      1, 2, 3, 4, 5
    ]
  },
  tapEvent: function (e) {
    let lines = this.data.lines;
    lines.splice(0, 0, {
      id: 5,
      name: 'newAdd'
    })
    //this.data.lines = lines此方法可以改变lines的值但不会重新渲染数据
    //调用setData方法热更新，传入一个对象
    this.setData({
      lines: lines
    });

    let list = this.data.list;
    list.splice(0, 0, 7);
    this.setData({
      list: list
    })
  }
})