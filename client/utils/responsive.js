/**
 * rem响应式方案的实现，与点击延迟处理
 */
import FastClick from 'fastclick'
FastClick.attach(global.document.body)

let win = global
let doc = win.document
let baseWidth = 750
let documentHTML = doc.documentElement
let pixelRatio = 2

/**
 * 设置html根字体
 */
function setRootFont () {
  let docWidth = documentHTML.getBoundingClientRect().width
  let scale = docWidth / baseWidth
  documentHTML.style.fontSize = `${scale * 100}px`
  pixelRatio = global.devicePixelRatio === 3 ? 3 : 2
  documentHTML.setAttribute('data-dpr', pixelRatio)
}

setRootFont()
win.addEventListener('resize', setRootFont, false)
