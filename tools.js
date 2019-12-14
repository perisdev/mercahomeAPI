// const crypto = require('crypto');
//
// const generateId = () =>
//   ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
//     (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
//   );
//
//   module.exports = {
//     generateId,
//   };
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('./config');

exports.createToken = function(email_user) {
  const payload = {
    sub: email_user,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};


