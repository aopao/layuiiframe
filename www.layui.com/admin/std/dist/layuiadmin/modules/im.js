/** layuiAdmin.std-v1.0.0-beta9 LPPL License By http://www.layui.com/admin/ */
;layui.define(["index","layim"],function(e){var a=layui.$,t=(layui.admin,layui.element,layui.router(),layui.layim),n=["您好，我现在有事不在，一会再和您联系。","你没发错吧？face[微笑] ","洗澡中，请勿打扰，偷窥请购票，个体四十，团体八折，订票电话：一般人我不告诉他！face[哈哈] ","你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。face[心] face[心] face[心] ","face[威武] face[威武] face[威武] face[威武] ","<（@￣︶￣@）>","你要和我说话？你真的要和我说话？你确定自己想说吗？你一定非说不可吗？那你说吧，这是自动回复。","face[黑线]  你慢慢说，别急……","(*^__^*) face[嘻嘻] ，是贤心吗？"];t.config({init:{url:layui.setter.base+"json/layim/getList.js",data:{}},members:{url:layui.setter.base+"json/layim/getMembers.js",data:{}},uploadImage:{url:"",type:""},uploadFile:{url:"",type:""},isAudio:!0,isVideo:!0,tool:[{alias:"code",title:"代码",icon:"&#xe64e;"}],initSkin:"3.jpg",msgbox:"/layim/demo/msgbox.html",find:"/layim/demo/find.html",chatLog:"/layim/demo/chatlog.html"}),t.on("online",function(e){layer.msg(e)}),t.on("sign",function(e){layer.msg(e)}),t.on("tool(code)",function(e){layer.prompt({title:"插入代码 - 工具栏扩展示例",formType:2,shade:0},function(a,t){layer.close(t),e("[pre class=layui-code]"+a+"[/pre]")})}),t.on("ready",function(e){t.msgbox(5)}),t.on("sendMessage",function(e){var a=e.to;"friend"===a.type&&t.setChatStatus('<span style="color:#FF5722;">对方正在输入。。。</span>'),setTimeout(function(){var e={};"group"===a.type?e={username:"模拟群员"+(100*Math.random()|0),avatar:layui.cache.dir+"images/face/"+(72*Math.random()|0)+".gif",id:a.id,type:a.type,content:n[9*Math.random()|0]}:(e={username:a.name,avatar:a.avatar,id:a.id,type:a.type,content:n[9*Math.random()|0]},t.setChatStatus('<span style="color:#FF5722;">在线</span>')),t.getMessage(e)},1e3)}),t.on("members",function(e){}),t.on("chatChange",function(e){var a=e.data.type;console.log(e.data.id),"friend"===a||"group"===a&&t.getMessage({system:!0,id:e.data.id,type:"group",content:"模拟群员"+(100*Math.random()|0)+"加入群聊"})});var a=layui.jquery,i={chat:function(){t.chat({name:"小闲",type:"friend",avatar:"//tva3.sinaimg.cn/crop.0.0.180.180.180/7f5f6861jw1e8qgp5bmzyj2050050aa8.jpg",id:1008612}),layer.msg("也就是说，此人可以不在好友面板里")},message:function(){t.getMessage({username:"贤心",avatar:"//tp1.sinaimg.cn/1571889140/180/40030060651/1",id:"100001",type:"friend",content:"嗨，你好！欢迎体验LayIM。演示标记："+(new Date).getTime(),timestamp:(new Date).getTime()})},messageAudio:function(){t.getMessage({username:"林心如",avatar:"//tp3.sinaimg.cn/1223762662/180/5741707953/0",id:"76543",type:"friend",content:"audio[http://gddx.sc.chinaz.com/Files/DownLoad/sound1/201510/6473.mp3]",timestamp:(new Date).getTime()})},messageVideo:function(){t.getMessage({username:"林心如",avatar:"//tp3.sinaimg.cn/1223762662/180/5741707953/0",id:"76543",type:"friend",content:"video[http://www.w3school.com.cn//i/movie.ogg]",timestamp:(new Date).getTime()})},messageTemp:function(){t.getMessage({username:"小酱",avatar:"//tva1.sinaimg.cn/crop.7.0.736.736.50/bd986d61jw8f5x8bqtp00j20ku0kgabx.jpg",id:"198909151014",type:"friend",content:"临时："+(new Date).getTime()})},add:function(){t.add({type:"friend",username:"麻花疼",avatar:"//tva1.sinaimg.cn/crop.0.0.720.720.180/005JKVuPjw8ers4osyzhaj30k00k075e.jpg",submit:function(e,a,t){layer.msg("好友申请已发送，请等待对方确认",{icon:1,shade:.5},function(){layer.close(t)})}})},addqun:function(){t.add({type:"group",username:"LayIM会员群",avatar:"//tva2.sinaimg.cn/crop.0.0.180.180.50/6ddfa27bjw1e8qgp5bmzyj2050050aa8.jpg",submit:function(e,a,t){layer.msg("申请已发送，请等待管理员确认",{icon:1,shade:.5},function(){layer.close(t)})}})},addFriend:function(){var e={type:"friend",id:1234560,username:"李彦宏",avatar:"//tva4.sinaimg.cn/crop.0.0.996.996.180/8b2b4e23jw8f14vkwwrmjj20ro0rpjsq.jpg",sign:"全球最大的中文搜索引擎"};t.setFriendGroup({type:e.type,username:e.username,avatar:e.avatar,group:t.cache().friend,submit:function(a,n){t.addList({type:e.type,username:e.username,avatar:e.avatar,groupid:a,id:e.id,sign:e.sign}),layer.close(n)}})},addGroup:function(){layer.msg("已成功把[Angular开发]添加到群组里",{icon:1}),t.addList({type:"group",avatar:"//tva3.sinaimg.cn/crop.64.106.361.361.50/7181dbb3jw8evfbtem8edj20ci0dpq3a.jpg",groupname:"Angular开发",id:"12333333",members:0})},removeFriend:function(){layer.msg("已成功删除[凤姐]",{icon:1}),t.removeList({id:121286,type:"friend"})},removeGroup:function(){layer.msg("已成功删除[前端群]",{icon:1}),t.removeList({id:101,type:"group"})},setGray:function(){t.setFriendStatus(168168,"offline"),layer.msg("已成功将好友[马小云]置灰",{icon:1})},unGray:function(){t.setFriendStatus(168168,"online"),layer.msg("成功取消好友[马小云]置灰状态",{icon:1})},kefu1:function(){t.chat({name:"在线客服一",type:"kefu",avatar:"//tp1.sinaimg.cn/5619439268/180/40030060651/1",id:1111111})},kefu2:function(){t.chat({name:"在线客服二",type:"kefu",avatar:"//tp1.sinaimg.cn/5619439268/180/40030060651/1",id:2222222})},mobile:function(){var e=layui.device(),a="/layim/demo/mobile.html";if(e.android||e.ios)return location.href=a;var t=layer.open({type:2,title:"移动版演示 （或手机扫右侧二维码预览）",content:a,area:["375px","667px"],shadeClose:!0,shade:.8,end:function(){layer.close(t+2)}});layer.photos({photos:{data:[{src:"http://cdn.layui.com/upload/2016_12/168_1481056358469_50288.png"}]},anim:0,shade:!1,success:function(e){e.css("margin-left","350px")}})}};a(".LAY-senior-im-chat-demo .layui-btn").on("click",function(){var e=a(this).data("type");i[e]?i[e].call(this):""}),e("im",{})});