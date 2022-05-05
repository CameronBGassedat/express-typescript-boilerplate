import { EventEmitter } from "stream";
import IMailer from "./IMailer";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { Emitter } from "@/Events/Event";
"use strict";

class Mailer extends EventEmitter implements IMailer {
  transporter : nodemailer.Transporter;

  constructor(Emitter : EventEmitter) {
    super()
    Emitter.on('event', (to, subject, body) => {
      mailer.sendEmail(to, subject, body);
    });

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
      from: 'Sumatohomu" <maxence.rouge@ynov.com>',
      to: to,
      subject: subject,
      html: text,
    });

    console.log("Message sent: %s", info.messageId);
  }
}

export const mailer = new Mailer(Emitter);