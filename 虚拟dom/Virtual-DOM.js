/*
 * @Author: your name
 * @Date: 2020-05-28 14:13:21
 * @LastEditTime: 2020-05-28 14:47:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath:
 */
// 创建虚拟DOM元素的类，构建实例对象，就是用来描述DOM
/**
 * @description: 创建虚拟DOM元素的类，构建实例对象，就是用来描述DOM
 * @param {string} type 元素类型
 * @param {object} props 元素属性
 * @param {array} children 元素子节点
 * @return: null
 */
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}
/**
 * @description: 创建虚拟DOM，返回虚拟节点
 * @param {type} 
 * @return: object 虚拟DOM
 */
function createElement (type, props, children) {
  return new Element(type, props, children);

}
/**
 * @description: 虚拟DOM转化成真实DOM
 * @param {object} domObj 虚拟dom
 * @return: 真实dom
 */
function render (domObj) {
  // 根据type类型来创建对应的元素
  let el = document.createElement(domObj.type);

  // 再去遍历props属性对象，然后给创建的元素el设置属性
  for (let key in domObj.props) {
    // 设置属性的方法
    setAttr(el, key, domObj.props[key]);
  }

  // 遍历子节点
  // 如果是虚拟DOM，就继续递归渲染
  // 不是就代表是文本节点，直接创建
  domObj.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child);
    // 添加到对应元素内
    el.appendChild(child);
  });

  return el;
}
/**
 * @description: 为dom设置属性
 * @param {object} node 节点
 * @param {string} key 属性
 * @param {string} value 属性值
 * @return: null
 */
function setAttr (node, key, value) {
  switch (key) {
    case 'value':
      // node是一个input或者textarea就直接设置其value即可
      if (node.tagName.toLowerCase() === 'input' ||
        node.tagName.toLowerCase() === 'textarea') {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    case 'style':
      // 直接赋值行内样式
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
}
/**
 * @description: 虚拟都没挂载到页面
 * @param {object} el 转化后的真实dom
 * @param {object} target 真实dom的挂载点
 * @return: null
 */
function renderDom (el, target) {
  target.appendChild(el);
}
// export {
//   Element,
//   createElement,
//   render,
//   setAttr,
//   renderDom
// };