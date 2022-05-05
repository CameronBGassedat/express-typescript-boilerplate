export default interface IMailer {
    mailer: (to: string, subject: string, text: string) => Mailer | null;
}