// ==UserScript==
// @name         serv00自动填充表单
// @namespace    https://webproxy.lumiproxy.com/
// @version      0.1
// @description  自动填充注册表单字段
// @author       Dabo
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 设置默认邮箱地址
    const EMAIL_ADDRESS = 'xxx@gmail.com';

    // 生成随机字符串（5个字母）
    function generateRandomString() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return result;
    }

    // 随机生成名字
    function generateRandomName() {
        return {
            firstName: generateRandomString(),
            lastName: generateRandomString()
        };
    }

    // 生成随机邮箱
    function generateRandomEmail(firstName, lastName) {
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}@${domain}`;
    }

    // 生成随机用户名
    function generateRandomUsername(firstName, lastName) {
        return `${firstName.toLowerCase()}${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}`;
    }

    // 自动填充表单
    function autoFillForm() {
        const name = generateRandomName();
        const email = generateRandomEmail(name.firstName, name.lastName);
        const username = generateRandomUsername(name.firstName, name.lastName);

        // 填充名字字段
        const firstNameInputs = document.querySelectorAll('input[name*="first_name" i], input[id*="first_name" i]');
        firstNameInputs.forEach(input => input.value = name.firstName);

        // 填充姓氏字段
        const lastNameInputs = document.querySelectorAll('input[name*="last_name" i], input[id*="last_name" i]');
        lastNameInputs.forEach(input => input.value = name.lastName);

        // 填充用户名字段
        const usernameInputs = document.querySelectorAll('input[name*="username" i], input[id*="username" i]');
        usernameInputs.forEach(input => input.value = username);

        // 填充邮箱字段
        const emailInputs = document.querySelectorAll('input[type="email"], input[name*="email" i], input[id*="email" i]');
        emailInputs.forEach(input => input.value = EMAIL_ADDRESS);

        // 填充答案字段
        const answerInputs = document.querySelectorAll('input[name*="question" i], input[id*="question" i]');
        answerInputs.forEach(input => input.value = "free");

        // 自动勾选服务条款复选框
        const tosCheckboxes = document.querySelectorAll('input[type="checkbox"][name="tos"], input[type="checkbox"][id*="tos" i]');
        tosCheckboxes.forEach(checkbox => checkbox.checked = true);
    }

    // 删除按钮相关代码，直接在页面加载完成后执行自动填充
    document.addEventListener('DOMContentLoaded', autoFillForm);
    // 为了处理某些动态加载的表单，也可以在 load 事件时执行一次
    window.addEventListener('load', autoFillForm);
})();
