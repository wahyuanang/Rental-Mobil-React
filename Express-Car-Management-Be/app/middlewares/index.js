const uploader = require("./uploader");
const authenticated = require("./authenticate");
const authorize = require("./authorize")

module.exports = {
    uploader,
    authenticated,
    authorize
}