// config for mailserver and mail, input your data
const emailConfig = {
  mailServer: {
    service: "gmail",
    auth: {
      user: "rattanak.chea@gmail.com",
      pass: "ohatoiyjlexzszjk" //google app password
    }
  },
  mail: {
    from: "rattanak.chea@gmail.com",
    to: "",
    subject: "Hey time to hit Leetcode",
    text: "<h1>You should learn Leetcode</h1>"
  }
};

module.exports = emailConfig;
