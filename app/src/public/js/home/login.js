"use strict"

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("#loginButton");

console.log(id);
console.log("Hello");

loginBtn.addEventListener("click", login);

function login() {
    if (!id.value) {
        return alert("아이디를 입력해주세요.");
    }
    if (!pw.value) {
        return alert("비밀번호를 입력해주세요.");
    }
    const req = {
        id: id.value,
        pw: pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        }) 
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}

// DOM -> Document Object Model