const { Router } = require("express");

const { gruposGet, gruposPost } = require("../controllers/grupos");

const router = Router();

router.get("/", gruposGet);

router.post("/", gruposPost);

module.exports = router;
