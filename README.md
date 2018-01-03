# vnp-demo
> 基于Vue2.0开发的 <code>移动端</code> 数字密码输入框 组件

![演示1](https://github.com/EastblueOkay/vue-number-pwd/blob/master/static/Snip20180102_1.png)

![演示2](https://github.com/EastblueOkay/vue-number-pwd/blob/master/static/Snip20180102_2.png)


## 安装
```js
npm install vue-number-pwd
```

## 使用
```js
// 在main.js中注册插件
import vnp from "vue-number-pwd"
Vue.use(vnp)

// 直接在.vue中使用
<vue-number-pwd></vue-number-pwd>
```


### 配置
```html
   <vue-number-pwd 
      :number="4"
      @validate="validate"
      @stepValidate="stepValidate"
    ></vue-number-pwd>
```

```javascript
export default {
  name: 'app',
  methods: {
    validate(pwd){
      console.log(pwd);
    },
    stepValidate(pwd){
      console.log(pwd);
    }
  }
}
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| number       | 数字密码的位数 |Number| 4

### Events

| name | Description   |
| :--------:   | -----  |
|    validate    |  密码输入完成后的回调，传递输入的密码
|    stepValidate  |  每输入一次调用，传递当前输入的密码
