const db = require("../server/databases/postgres/config");
const { Op } = require("sequelize");
const { Users } = db;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./configTokens");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Users.findOne({ where: { id: jwt_payload.id } })
        .then(user => {
          if (user) {
            return done(null, user);
          }
          if (!user) {
            return done(null, false);
          }
        })
        .catch(err => console.log(err));
    })
  );
};
