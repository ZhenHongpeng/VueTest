# 这是一个NB的项目,
## 牛不牛逼用心去感受
### 实在编不下去了哈哈哈

## 制作首页app组件
1. 完成header区域.,使用的是Mint-UI 中的Header组件
2. 制作底部的tabbar区域,使用的是mui 的tabbar.html
 + 在制作购物车小图标的时候,操作会多一些,
 + 先把拓展图标的css样式,拷贝到项目中
 + 还要拷贝我们的扩展字体库 ttf 文件,到项目中
 + 为购物车小图标 添加如下样式:'''''''''''
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造 tebbar 为 router-link 

## 设置路由高亮

## 点击tabbar 中的路由连接,展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据,如何获取呢? router-resource
2.使用 vue-resource 的this.$http.get 获取数据
3.获取到的数据要保存到我们的data身上
4.使用v-for渲染循环每个item项

## 改造九宫格区域的样式
## 改造新闻咨询 路由链接
## 新闻咨询 页面制作
1.绘制页面 使用mui 中的 media-list.html
2.使用 vue-resource 获取数据
3.渲染真实数据

## 实现新闻咨询列表点击跳转到新闻详情
1. 吧列表中的每一项改造为 router-link,同时,在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面,NewInfo.vue
3在路由模块中,将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中,先手动导入comment组件
+ `import comment from './comment.vue''`
3.在父组件中,使用 `components` 属性,将刚才导入的comment组件,注册为自己的子组件
4. 将注册子组件时候的 注册名称,以标签形式,在页面中引用即可

## 获取所有的评论数据显示到页面中.
1.getcomments(){}

## 发表评论
1.吧文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空,如果为空,则用Toast提示用户,评论内容不能为空.
4.通过vue-resource发送一个请求,把评论内容提交给服务器,
5,自动刷新评论列表.
5,当发表评论OK后,重新刷新列表,以查看最新的评论
+ 如果调用 getComments 方法重新刷新评论列表的话,可能只能得到最后一页的评论,前几页的评论获取不到
+ 换一种思路,当评论承购后,在客户端,手动拼接出一个最新的评论对象,然后调用数组的unshift方法,把最新的评论追加到data中 comments的开头,这样就能完美实现属性评论列表的需求


## 改造图片分享按钮为路由的连接,并显示对应的组件页面

## 绘制图片列表 组件 并美化样式
1. 制作 顶部的滑动条
2. 制作 底部的图片列表

## 制作顶部滑动条的坑们
1. 需要借助于mui中的tab-top-webview-main.html
2.需要把slider 区域的mui-fullscreen 去掉
3.滑动条无法正常滑动,通过检查官方文档这是一个js组件,需要被初始化一下
+ 导入mui.js
+ 调用官方提供的方式去初始化:
```
mui('.mui-scroll-wrapper').scroll({
 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
 });
```
4. 我们在初始化滑动条的时候导入了 mui.js 但是,控制台报错了
```
 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```
 + 经过我们合理的推测,觉得可能是mui 中用到了'caller', 'callee', and 'arguments',但是,webpack打包好的bundle.js
 + 默认是启用严格模式的,所以,这两者冲突了
 + 解决方案:bundle.js不启用严格模式.修改mui版本,在
5. 刚进入图片分享页面的时候,滑动条无法正常工作,经过分析,发现,如果要初始化滑动条,必须要等DOM元素加载完毕,所以把初始化滑动条的代码放在mounted生命周期函数中
6. 当滑动条调试OK后,发现,tabbar 无法正常工作了,这时候,我们需要把每个tabbar 按钮的样式中的 `mui-tab-item` 重新改名字
7. 获取所有分类,并渲染分类列表

## 制作图片列表区域
1.图片列表需要使用懒加载技术,我们可以使用Mint-UI 提供的现成的
```
lazy-load
```
2.根据lazy-load 的使用文档使用
3.渲染图片列表数据

## 实现了图片列表的懒加载改造 和样式美化

## 实现了 点击图片 跳转到图片详情页面
1.再改造li 成router-link的时候,需要使用tag属性指定要渲染为哪种元素

## 实现详情页面的布局和美化,同时获取数据渲染页面

## 实现图片详情中缩略图的功能
1. 使用vue2-preview 这个缩略图插件
2.获取到所有的图片列表,然后渲染数据


## 绘制 商品列表 页面基本结构并美化

## 尝试在手机上进行项目的预览和测试
1.要保证自己的手机可以正常运行
2.要保证手机 和 开发项目的电脑处于同一个wifi环境中 也就是说,手机可以访问到电脑的ip
3.打开自己项目中 package.json 文件 在dev脚本中,添加一个 --host 指令, 把当前电脑的wifi ip 地址,设置为 --host 的指令值
 + 如何查看自己电脑所处wifi 的 ip ------在cmd 终端中 运行`ipconfig` ,查看无线网的ip地址
 ```
 "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot ",
  "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot --host 192.168.1.103",


```
 



