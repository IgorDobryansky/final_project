module.exports = {
  mongoURI:
    'mongodb+srv://kolya:7W1xKuGtgvd7qOBq@clustershop.cdtfk2a.mongodb.net/shop?retryWrites=true&w=majority',
  secretOrKey: 'random very very secret string',
  nodemailerUser: process.env.NODEMAILER_USER,
  nodemailerPassword: process.env.NODEMAILER_PASSWORD,
  nodemailerService: process.env.NODEMAILER_SERVICE
};
