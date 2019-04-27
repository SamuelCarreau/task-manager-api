const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nodecourse@thepanda.ca',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nodecourse@thepanda.ca',
        subject: `Your acount is now canceled!`,
        text: `Good bye ${name}, is there anything we can do to keep you on board!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}