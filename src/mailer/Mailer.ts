import {EventEmitter} from "stream";
import IMailer from "./IMailer";
import nodemailer from "nodemailer";
"use strict";

class Mailer extends EventEmitter implements IMailer {
  constructor() {
    super()
  }

  public mailer: (to: string, subject: string, text: string) {
    
  }

  let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 587,
    secure: false,
    auth: {
      user: 'project.1',
      pass: 'secret.1'
    },
  });

  let info = await transporter.sendMail({
    from: '"Maxence Rougé" <maxence.rouge@ynov.com>',
    to: "cameron.gassedat@ynov.com",
    subject: "Hello, faut bosser",
    html: "<b>HTML Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

// async function main() {
//   let transporter = nodemailer.createTransport({
//     host: 'localhost',
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'project.1',
//       pass: 'secret.1'
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"Maxence Rougé" <maxence.rouge@ynov.com>',
//     to: "cameron.gassedat@ynov.com",
//     subject: "Hello, faut bosser",
//     html: "<b>HTML Hello world?</b>",
//   });

//   console.log("Message sent: %s", info.messageId);
// }

//Mailer.catch(console.error);