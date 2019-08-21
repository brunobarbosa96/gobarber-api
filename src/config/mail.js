export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    default: {
        from: "Bruno Barbosa <noreply@gobarber.com>"
    }
};

/**
 * Exemplos de servidores de e-mail
 *
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril (Mailchimp)
 * Mailtrap (DEV)
 *
 */
