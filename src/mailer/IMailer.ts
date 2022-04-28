export default interface IMailer {
    mailer: () => Mailer | null;
}