import {EventEmitter} from "stream";
import IMailer from "./IMailer";

"use strict";
import nodemailer from "nodemailer";

async function main() {
  let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 587,
    secure: false,
    auth: {
      user: 'project.1',
      pass: 'secret.1'
    },
  });
//https://moodle.ynov.com/mod/page/view.php?id=66896
  let info = await transporter.sendMail({
    from: '"Maxence Rougé" <maxence.rouge@ynov.com>',
    to: "cameron.gassedat@ynov.com",
    subject: "Hello, faut bosser",
    html: "<b>HTML Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);