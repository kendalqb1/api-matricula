const { Router } = require("express");
const { ciclosGet, ciclosPost } = require("../controllers/ciclos");

const router = Router();

router.get("/", ciclosGet);

router.post("/", ciclosPost);

module.exports = router;
