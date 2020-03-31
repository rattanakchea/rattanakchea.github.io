const nodemailer = require("nodemailer");
const emailConfig = require("./email-config");
var fs = require("fs");

// send email using nodemailer
class EmailController {
  // async..await is not allowed in global scope, must use a wrapper

  // toEmail array of email
  async send(toEmails) {
    if (toEmails.length == 0) {
      console.log("There must be at least one email");
      return;
    }

    let { mailServer, mail } = emailConfig;
    // convert to string
    let toEmailsString = this.getSubscribedEmails().join(",");
    mail.to = toEmailsString;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(mailServer);
    // send mail with defined transport object
    let info = await transporter.sendMail(mail);
    console.log("Message sent: %s", info.messageId);
  }

  // subscribe to mailing list
  // save email to some sort of json-base file, or csv
  subscribe(newEmail) {
    let filePath = "./components/email/email_list.json";

    // read the file list
    var buffer = fs.readFileSync(filePath).toString("utf-8");
    console.log(buffer);
    let emailList = [];
    if (buffer) {
      emailList = JSON.parse(buffer);
    }

    for (let i = 0; i < emailList.length; i++) {
      if (emailList[i].email === newEmail) {
        emailList[i].modifiedDate = new Date();
        fs.writeFileSync(filePath, JSON.stringify(emailList));
        return "User email already existed";
      }
    }
    emailList.push({
      email: newEmail,
      createdDate: new Date(),
      modifiedDate: new Date()
    });
    // save the email back to the list
    fs.writeFileSync(filePath, JSON.stringify(emailList));
    console.log("Thanks for subscription: ", newEmail);
    return "Thanks for subscription.";
  }

  // allow user to unsubscribe
  unsubscribe(email) {
    // read the file
    // check for existing email
    // if true, remove write file
  }

  // get list of subscribed email
  // @return [email1, email2]
  getSubscribedEmails() {
    let emailList = [];
    let filePath = "./components/email/email_list.json";
    var buffer = fs.readFileSync(filePath).toString("utf-8");
    if (buffer) {
      emailList = JSON.parse(buffer);
    }
    return emailList.map(person => person.email);
  }
}

module.exports = EmailController;
