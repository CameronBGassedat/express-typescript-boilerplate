export default interface IMailer {
    sendEmail: (to: string, subject: string, text: string) => void;
}