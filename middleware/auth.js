const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) => {
        try {
                const token = req.headers["authtoken"]

                if (!token) {
                        return res.status(401).send("No Token , authoriztion denied")
                }
                const decoded = jwt.verify(token, 'jwtSecret')

                console.log("Middleware", decoded);

                req.user = decoded.user
                
                next()

        } catch (err) {
                console.log(err)
                res.status(401).send('Token Invalid')
        }
}