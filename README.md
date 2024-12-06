# serv00soeasy serv00自动填充表单脚本

## 简介
这是一个基于 Tampermonkey 的用户脚本，用于自动填充网页注册表单。脚本会在页面加载完成后自动执行，无需手动操作。

## 使用代理方法
https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/
地址输入 https://www.serv00.com/offer/create_new_account
代理选择USA

## 功能特点
- 自动生成随机用户名
- 自动生成随机英文姓名
- 使用预设邮箱地址填充邮箱字段
- 自动填充问题答案
- 自动勾选服务条款复选框
- 支持动态加载的表单

## 安装步骤
1. 首先安装 Tampermonkey 浏览器扩展
   - [Chrome 版本](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox 版本](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2. 点击 Tampermonkey 图标，选择"添加新脚本"

3. 将脚本代码复制粘贴到编辑器中
4. // 设置你要注册的邮箱地址
    const EMAIL_ADDRESS = 'xxx@gmail.com';

5. 按 Ctrl+S 保存脚本

## 配置说明
你可以通过修改以下常量来自定义脚本行为：

## 支持的表单字段
脚本会自动识别并填充以下字段：
- 名字 (first_name)
- 姓氏 (last_name)
- 用户名 (username)
- 电子邮箱 (email)
- 问题答案 (question)
- 服务条款复选框 (tos)

## 注意事项
1. 脚本会在页面加载完成后自动执行
2. 支持大多数标准的表单字段命名方式
3. 如果表单是动态加载的，脚本也会在 load 事件触发时尝试填充

## 更新日志
### v0.1
- 初始版本发布
- 实现基本的表单自动填充功能
- 添加随机数据生成
- 支持自动勾选服务条款

## 许可证
MIT License

## 作者
DABO

## 问题反馈
如有问题或建议，请在 GitHub 上提交 Issue。
