import { observable, action } from "mobx-miniprogram";

export const store = observable({
  // 数据字段
	active: 0,

  // 计算属性
  // get sum() {
  //   return this.numA + this.numB;
  // },

  // actions
  updateActive: action(function (val) {
    this.active = val
  }),
});