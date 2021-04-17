const nodemailer = require("nodemailer");
module.exports = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // send mail with defined transport object
  let info = {
    from: '"Boupon Team" <noreply@boupon.io>',
    to: "richardharris916@gmail.com",
    subject: req.body.title,
    text: req.body.text,
  };

  await transporter.sendMail(info, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info);
  });
};
