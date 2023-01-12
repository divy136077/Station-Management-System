const jwt = require("jsonwebtoken");

const authenticator = (req: any, res: any, next: any) => {
 
    let token = req.header('auth-token');
    if (!token) {
        res.status(401).json({error:"Please validate using valid token"})
    }
    try {
        var data = jwt.verify(token, "DivyLadani")
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({error:"Please validate using valid token"})
    } console.log(data.user);
    
}

export default authenticator