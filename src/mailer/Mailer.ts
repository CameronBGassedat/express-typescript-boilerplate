import { EventEmitter } from "stream";
import IMailer from "./IMailer";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
"use strict";

class Mailer extends EventEmitter implements IMailer {
  transporter : nodemailer.Transporter;

  constructor() {
    super()
    this.transporter = nodemailer.createTransport({
      host: 'localhost',
      port: 587,
      secure: false,
      auth: {
        user: 'project.1',
        pass: 'secret.1'
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    let info = await this.transporter.sendMail({
      from: '"Maxence Rougé" <maxence.rouge@ynov.com>',
      to: "cameron.gassedat@ynov.com",
      subject: "Hello, faut bosser",
      html: "<b>HTML Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
  }
}

export const mailer = new Mailer();