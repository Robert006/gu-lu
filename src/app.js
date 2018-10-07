import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})


// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect

// 单元测试
// {
//     //1.验证icon图标
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData: {
//             icon: 'set'
//         }
//     });
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-set')
// } {
//     //2.验证加载按钮
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData: {
//             icon: 'set',
//             loading: true
//         }
//     });
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
// } {
//     //3.验证图标位置
//     const div = document.createElement('div')
//     document.body.appendChild(div);
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData: {
//             icon: 'set',
//         }
//     });
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg');
//     let order = window.getComputedStyle(svg).order;
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// } {
//     //4.验证图标右侧位置
//     const div = document.createElement('div')
//     document.body.appendChild(div);
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData: {
//             icon: 'set',
//             iconPosition: 'right'
//         }
//     });
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg');
//     let order = window.getComputedStyle(svg).order;
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// } {
//     //mock 模拟鼠标点击
//     const constructor = Vue.extend(Button);
//     const vm = new constructor({
//         propsData: {
//             icon: 'set',
//             loading: true
//         }
//     });
//     vm.$mount()
//     let spy = chai.spy(() => {

//     });
//     vm.$on('click', spy)
//     let button = vm.$el
//     button.click();
//     expect(spy).to.have.been.called()
// }