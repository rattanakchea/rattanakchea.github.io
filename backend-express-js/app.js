var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const cron = require("node-cron");
var EmailController = require("./components/email/email_controller");

// Routers
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var uploadRouter = require("./components/file_upload/upload");
var emailRouter = require("./components/email/email_route");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json()); // for parsing application/json

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Link to Routers
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/upload", uploadRouter);
app.use("/email", emailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// setup cron-job

const emailController = new EmailController();
const sendEmailJob = () => {
  let toEmails = emailController.getSubscribedEmails().join(",");
  console.log("emailTo: ", toEmails);
  if (toEmails.length > 0) {
    emailController.send(toEmails).catch("Failed to send");
  }
};

// register cron job
const everyMinute = "* * * * *";
const everyHour = "0 * * * *";

//UTC is 7 hours ahead of PST time
// 8AM PST = 8 + 7 = 15 or 3PM
const time_8am_PST = "00 15 * * *";

cron.schedule(time_8am_PST, sendEmailJob);

// Test cron job
// cron.schedule(everyMinute, sendEmailJob);

module.exports = app;
