const nodemailer = require("nodemailer");

class MailService {
  static errorSource = "mail service";

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendResetPasswordEmail(to, link, user) {
    const { name, lastname } = user;
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Reset password",
      text: "",
      html: `
			<div style="padding: 50px 0;">
				<h1 style="text-align: center;">Hello ${name} ${lastname}!</h1>
				<p style="text-align: justify; font-size: 18px;">At your request, this letter has been sent to change the password for the account in our online store "Home Comfort". If you've lost your password or 
				wish to reset it, use the link below to get started.</p>
				<div style="text-align: center; align-items: center; margin: 50px 0;">
				<a href="${link}" style="padding:25px 60px; text-align: center; background-color: lightblue; color: white; font-size: 20px; text-decoration: none;">Reset your password</a>
				</div>
				<p style="text-align: justify; font-size: 20px;" >If you did not request a password reset, you can safely ignore this email. Only a person with access to your email can reset account password.</p>
				<p style="text-align: center; font-size: 20px;">Sincerely, the <strong>Home Comfort</strong> team.</p>
			</div>	
		`,
    });
  }
}

module.exports = new MailService();
