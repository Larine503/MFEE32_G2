const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const cors = require('cors');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chingshin",
    port: 3306,
});

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST","PUT"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        key: "userId",
        secret: "Iamsosad,react",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60,
        },
    })
);
app.listen(8000, function () {
    console.log('喬巴: server:8000 已經啟動。');
});


// 登入資料
app.post("/login", (req, res) => {
    const { mtel, mpid } = req.body;
    db.query("select * from member where mtel= ?; ",
        mtel,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {

                bcrypt.compare(mpid, result[0].mpid, (error, response) => {
                    if (response) {
                        // 验证通过，将用户信息存储到 session 中
                        req.session.isLoggedIn = true;
                        req.session.user = mtel;

                        // 返回登录成功的 JSON 响应
                        res.json({ success: true });
                    } else {
                        res.send({ success: false, message: "密碼錯誤!" });
                    }
                });
            } else {
                req.session.isLoggedIn = false;
                res.send({ message: "尚未註冊資料" });
            }

        }
    );
});
//登入確認
app.get("/login", (req, res,) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

// 登出資料
app.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});
// 清除session
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie('connect.sid');
        res.status(200).send('OK');
      }
    });
  });

//會員資料
app.get("/member/:mtel", function (req, res) {
    db.query("select * from member where mtel = ?",
        [req.params.mtel],
        function (err, rows) {
            res.send(JSON.stringify(rows[0]));
        }
    )
})
//飲品訂單總表
app.get("/member/orderList/drinklist/:phone", function (req, res) {
    db.query("select * from drink_list where phone = ?",
        [req.params.phone],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
//飲品訂單明細
app.get("/order/billAll/:id", function (req, res) {
    db.query("select * from drink_history where id = ?",
        [req.params.id],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})

//周邊商品訂單總表
app.get("/member/orderList/productlist/:o_order_tel", function (req, res) {
    db.query("select * from product_order where o_order_tel = ?",
        [req.params.o_order_tel],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})
//周邊訂單明細
app.get("/member/orderList/productlist/:o_order_tel/:o_id", function (req, res) {
    db.query("select * from order_detail where o_id = ?",
        [req.params.o_id],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})

//會員註冊
app.post("/member/creat", function (req, res) {
    const mname = req.body.mname;
    const mtel = req.body.mtel;
    const mpid = req.body.mpid;

    bcrypt.hash(mpid, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        db.query("insert into member (mname,mtel, mpid) values (?, ?, ?)",
            [mname, mtel, hash],
            (err, result) => {
                console.log(result);
            }
        );
    })
})

// 會員資料修改
app.put("/member/edit", function (req, res) {
    db.query("update member set mname = ?, email = ?,  address = ? where mtel = ?",
        [req.body.mname, req.body.email,  req.body.address, req.body.mtel],
        function (err, rows) {
            if (err) {
                console.log(err);
                res.status(500).send(err.message);
            } else {
                res.send(JSON.stringify(req.body));
            }
        }
    );
});
//會員密碼修改
app.post("/password", (req, res) => {
    db.query("select * from member where mtel= ?; ",
        req.body.mtel,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {

                bcrypt.compare(req.body.currentPassword, result[0].mpid, (error, response) => {
                    if (response) {
                        res.json({ success: true });
                    } else {
                        res.send({ success: false, message: "原密碼錯誤!" });
                    }
                });
            }
        }
    );
});
app.put("/password", function (req, res) {
    const mtel = req.body.mtel;
    const mpid = req.body.confirmPassword;
    bcrypt.hash(mpid, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        db.query("update member set pid=?, mpid = ? where mtel = ?",
            [mpid, hash, mtel],
            (err, result) => {
                console.log(result);
            }
        );
    });
});

//葉的門市據點-----
app.get('/storeList', (req, res) => {
   const sql = 'SELECT * FROM store';
   db.query(sql, (err, result) => {
     if (err) {
       throw err;
     }
     res.json(result);
   });
 });


 app.get('/storeList/:county', function (req, res) {
   db.query('select * from store where county = ?',
       [req.params.county],
       function (err, rows) {
           res.send( JSON.stringify(rows) );
       }
   )
})
//----------

db.connect(function (err) {
    if (err) {
        console.log('喬巴：資料庫 連線 有誤');
        console.log(err);
    } else {
        console.log('喬巴：資料庫 連線 成功');
    }
});