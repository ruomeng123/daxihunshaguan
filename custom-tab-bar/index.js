// custom-tab-bar/index.js
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/store";
Component({
  behaviors: [storeBindingsBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        "pagePath": "/pages/home/home",
        "text": "主页",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-active.png"
      },
      {
        "pagePath": "/pages/photo/photo",
        "text": "客片",
        "iconPath": "images/image.png",
        "selectedIconPath": "images/image-active.png"
      },
      {
        "pagePath": "/pages/about/about",
        "text": "关于",
        "iconPath": "images/fish.png",
        "selectedIconPath": "images/fish-active.png"
      }
    ]
  },
  storeBindings: {
    store,
    fields: {
      active: "active"
    },
    actions: {
      updateActive: "updateActive"
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
    

  }
})
