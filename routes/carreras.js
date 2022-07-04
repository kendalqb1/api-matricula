const { Router } = require("express");
const { carrerasGet, carrerasPost } = require("../controllers/carreras");

const router = Router();

router.get("/", carrerasGet);

router.post("/", carrerasPost);

module.exports = router;
