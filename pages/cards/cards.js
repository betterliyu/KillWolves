//logs.js
const {
  Role
} = require('../../models/Model.js')

const srcCards = [{
  role: Role.Prophet,
  img: '/images/prophet.jpg',
}, {
  role: Role.Civilian,
  img: '/images/civilian.jpg',
}, {
  role: Role.Civilian,
  img: '/images/civilian.jpg',
}, {
  role: Role.Werwolf,
  img: '/images/werwolf.jpg',
}, {
  role: Role.Werwolf,
  img: '/images/werwolf.jpg',
}, {
  role: Role.Witch,
  img: '/images/witch.jpg',
}, {
  role: Role.Werwolf,
  img: '/images/werwolf.jpg',
}, {
  role: Role.Witch,
  img: '/images/witch.jpg',
}]

Page({
  data: {
    cards: [],
    isSwiperVisible: false
  },
  onLoad: function () {
    this.setData({
      cards: srcCards
    })
  },
  showCardSwiper: function() {
    this.setData({
      isSwiperVisible: true
    })
  }
})