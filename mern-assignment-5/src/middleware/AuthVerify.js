var jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{

    let Token = req.headers["token-key"];

    jwt.verify(Token, "SecretKey123456789", function (err, decoded) {

        if (err) {
            res.status(401).json({ status: "unauthorized" })
        } 
        else {
            //get user name form decode token & add with req header
            let username = decoded['data']['UserName']
            req.headers.username=username


            next();

        }

    })
}