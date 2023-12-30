const express = require("express")
const { codeControllers } = require("../controllers")
const routers = express.Router()

routers.get("/helo", codeControllers.helo)
routers.get("/menu", codeControllers.getMenu)

module.exports = routers