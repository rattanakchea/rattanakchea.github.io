var express = require("express");
var router = express.Router();
var EmailController = require("./email_controller");

let emailController = new EmailController();

router.get("/send", function(req, res, next) {
  res.send("send email");
  emailController.send().catch(console.error);
});

router.post("/subscribe", function(req, res, next) {
  const { email } = req.body;
  let resultText = emailController.subscribe(email);

  res.status(200);
  res.json({
    status: resultText
  });
});

module.exports = router;
