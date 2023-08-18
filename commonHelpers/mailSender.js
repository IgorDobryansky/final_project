const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  const configs = await getConfigs();
  console.log("configs", configs);

  //authorization for sending email
  // let transporter = nodemailer.createTransport({
  //   service:
  //     process.env.NODE_ENV === "production"
  //       ? configs.production.email.mailService
  //       : configs.development.email.mailService,
  //   auth: {
  //     user:
  //       process.env.NODE_ENV === "production"
  //         ? configs.production.email.mailUser
  //         : configs.development.email.mailUser,
  //     pass:
  //       process.env.NODE_ENV === "production"
  //         ? configs.production.email.mailPassword
  //         : configs.development.email.mailPassword
  //   }
  // });
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });



  const mailOptions = {
    from: "ccafeseu@gmail.com",
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
