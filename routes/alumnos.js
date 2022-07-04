const { Router } = require("express");
const { alumnosPost, alumnosGet } = require("../controllers/alumnos");

const router = Router();

router.get("/", alumnosGet);
router.post("/", alumnosPost);

module.exports = router;
