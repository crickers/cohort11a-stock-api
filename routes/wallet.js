var express = require("express");
var router = express.Router();
const { Wallet } = require("../lib/models");

// UPDATE - perform PUT request on http://localhost:3000/api/v1/wallet/:id

/* GET users listing. */
/*router.get("/", function (req, res, next) {*/
    router.get (path:'/', handlers:function (req: Request<P, resBody, reqBody, reqQuery>, res: Response <resBody>, next: NextFunction){
  res.send("respond with a wallet");
});

module.exports = router;
