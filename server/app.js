const express = require('express') // 引入 express
const app = express() // 实例一个 express 对象
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  alloweHeaders:['Conten-Type', 'Authorization']
})) // 解决跨域
// app.use(express.json()) // express处理json数据
app.use(bodyParser.json())



const mysql = require('mysql'); //调用 MySQL模块

// 创建连接
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // 用户名
    password: '123456', // 密码
    database: 'Article',// 数据库名
    port: 3306   // 端口号
})
db.connect( (err) => {
    if(err) throw err;
    console.log('连接成功');
})


app.get('/', (req, res) => {
    res.send('hello word')
})

//登录接口
app.get('/login', (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let query1 = 'select * from user where username = ? and password = ? '
  db.query(query1,[username, password],(err,result) =>{
    if(err) throw err;
    let state = {}
    if(result.length > 0) {
      state.state = 1;
      res.json(state);
    } else {
      state.state = 0;
      res.json(state);
    }
  })

})

// app.get('/login',(req,res)=>{
//   // 查询语句根据用户名查询用户信息
//   db.query("select * from user where username='"+req.query.username+"' and password='"+req.query.password+"'",(e,r)=>res.json(new Result({data:r})))
// })
// function Result({code=1,msg='',data={}}){
// this.code = code;
// this.msg = msg;
// this.data = data
// }

// app.all('*',function (req, res, next) {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("access-control-allow-origin", "http://localhost:8080/");
//     //允许的header类型
//     res.header("access-control-allow-headers", "content-type");
//     //跨域允许的请求方式
//     res.header("access-control-allow-methods", "delete,put,post,get,options");
//   　next();　
// });

// app.get('/article',(req, res) => {
//     let admin = req.body.username
//   let password = req.body.password;
//   console.log(admin,password)

//   let sqlStr = "select * from onepice_root where user = ? and password = ?";
//   let results = await sqlQuery(sqlStr,[admin,password]);
//   //判断results有无数据来决定登录成功与否
//   if(results.length!=0){
//     console.log("66")
//   return res.json({ status: 1, msg: '登录成功' })//成功时返回成功的json数据，下面亦然
//   }else{
//     console.log("6699")
//     return res.json({ status: 2, msg: '登录失败' })
//   }
// })

// // 新增文章
// app.post('/api/article', (req, res) => {
//     let data = req.body;
//     let sql = "INSERT INTO posts SET ?";
//     db.query(sql, data, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//         res.send(result)
//     }
//     })
// })

// // 获取文章列表
// app.get('/api/article', (req, res) => {
//     let sql = "SELECT * FROM posts";
//     db.query(sql, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//         res.json(result);
//     }
//     })
// })

// // 删除文章
// app.delete('/api/article/:id', (req, res) => {
//     let sql = `DELETE FROM posts WHERE id= ${req.params.id}`;
//     db.query(sql, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//         res.json(result);
//     }
//     })
// })

// // 获取文章详情
// app.get('/api/article/:id', (req, res) => {
//     let sql = `SELECT * FROM posts WHERE id= ${req.params.id}`
//     db.query(sql, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         res.json(result)
//     }
//     })
// })

// // 修改文章
// app.put('/api/article/:id', (req, res) => {
//     let newTitle = req.body.title;
//     let newBody = req.body.body;
//     let sql = `UPDATE posts SET title = '${newTitle}',body = '${newBody}' WHERE ID = ${req.params.id}`
//     db.query(sql, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         res.json(result)
//     }
//     })
// })

// 监听端口3000
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
