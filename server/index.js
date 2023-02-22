var express = require('express');
var app = express();
app.listen(8000, function () {
    console.log('喬巴: server:8000 已經啟動。');
})
const cors = require('cors');
app.use(cors());
app.use(express.json());

const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chingshin",
    port: 3306,
})
app.get("/member", function (req, res) {
    db.query("select * from member", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/member/:mtel", function (req, res) {
    db.query("select * from member where mtel = ?", 
        [req.params.mtel],
        function (err, rows) {
            res.send( JSON.stringify(rows[0]) );
        }
    )
})
app.post("/member/creat", function (req, res) {
    db.query("insert into member (mname,mtel, mpid) values (?, ?, ?)",
        [req.body.mname,req.body.mtel, req.body.mpid],
        function (err, rows) {
            res.send(JSON.stringify(req.body));
        }
    )

})
app.put("/member/edit", function (req, res) {
    db.query("update member set mname= ?, email = ? , birthday = ? ,address = ? where mtel = ?", 
        [req.body.mname, req.body.email, req.body.birthday, req.body.address, req.body.mtel],
        function (err, rows) {
            res.send( JSON.stringify( req.body ));
        }
    )

})

db.connect(function (err) {
    if (err) {
        console.log('喬巴：資料庫 連線 有誤');
        console.log(err);
    } else {
        console.log('喬巴：資料庫 連線 成功');
    }
});