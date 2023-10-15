"use strict"

class UserStorage {
    static #users = {   // #으로 은닉화
        id: ["mimi", "장미", "박팀장"],
        pw: ["1234", "1234", "123456"],
        name: ["미미", "장미미", "박팀장미"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;