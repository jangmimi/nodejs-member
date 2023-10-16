"use strict"

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, pw } = await UserStorage.getUserInfo(client.id);

        if (id) {
            if (id === client.id && pw === client.pw) {
                return { success: true };
            } 
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            const a = { success: false, msg: err };
            console.log(typeof a.msg);
            return a;
        }
    }
}

module.exports = User;