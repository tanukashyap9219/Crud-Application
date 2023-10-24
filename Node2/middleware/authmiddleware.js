const jwt = require("jsonwebtoken")
const userDashboard = (req, res, next) => {

    let token = req.headers["authorization"]
    // console.log(req.headers["authorization"], "--------")
    if(!token){
        res.status(401).send({message:"No token provided..."})
    }
    
    if(token && token.startsWith("Bearer")){
        try {
            token = token.split(" ")[1]
            console.log(token,"ttttt")
            jwt.verify(token, "tanu", (err, decoded) =>{
                if(err){
                    return res.status(403).send({message:"Failed to authenticate token."})
                }
                console.log(decoded.userId, "-------")
                req.userId = decoded.userId
                next()
            })
        } catch (error) {
            res.status(401).send({message:"Unauthorized user", status: "failed..."})
            
        }
    }

}

module.exports = {userDashboard}


  