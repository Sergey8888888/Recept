const jwtConfig = require("./jwtConfig");
const cookiesConfig = {
  access: "access",
  refresh: "refresh",
  httpOnly: true,
  maxAgeAccess: jwtConfig.access.expiresIn,
  maxAgeRefresh: jwtConfig.refresh.expiresIn,
};
module.exports = cookiesConfig;
