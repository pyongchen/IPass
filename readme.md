# 整体结构
```txt
 app(前端页面)
  |---app.auth(登录注册页面)
  |---app.chat(聊天页面)
  |---app.heat(热力图页面)
  |---app.home(项目主页)
         |---app.home.activity(比赛活动)
         |---app.home.ballTeam(球队管理和详情)
         |---app.home.honor(排行榜)
         |---app.home.search(搜索)
         |---app.home.service(服务)
         |---app.home.user(用户模块)
                |---app.home.userDetail(用户详情)
                |---app.home.userFriend(用户球友)
                |---app.home.userGame(用户球赛)
                |---app.home.userHoop(用户球圈)
                |---app.home.userMessage(用户消息)
                |---app.home.userSetting(用户设置)
                |---app.home.userTeam(用户球队)
 app-server(服务器)
   |---app-server.config(服务器配置)
   |---app-server.controllers(处理请求)
   |---app-server.message-sdk(阿里大鱼的短线功能)
   |---app-server.models(数据库模型)
   |---app-server.routers(路由)
   |---app-server.utils(假数据)
```

# 项目启动
```txt
npm install
bower install
启动mongodb
gulp serve
打开浏览器:localhost:3000
```

# 其他说明
1. 运行前先启动mongodb,第一次初始化数据库时运行app-server/utils/gen-fake-data.js
2. 借鉴Fuse的apiResolver的功能，已在index.api.js中实现该功能，可直接使用。
3. 页面跳转关系已基本完成，后期有改正再继续调整。

# 部分页面展示
1. 首页
<img src="https://github.com/CPYcpyCPY/IPass/blob/master/src/assets/images/show/home.png?raw=true"
  width="412px" height="732px">
2. 首页筛选
<img src="https://github.com/CPYcpyCPY/IPass/blob/master/src/assets/images/show/select.png?raw=true"
   width="412px" height="732px">
3. 热力图
<img src="https://github.com/CPYcpyCPY/IPass/blob/master/src/assets/images/show/heat.png?raw=true"
   width="412px" height="732px">

