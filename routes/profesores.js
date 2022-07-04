const { Router } = require("express");
const { profesoresGet, profesoresPost } = require("../controllers/profesores");

const router = Router();

router.get("/", profesoresGet);

router.post("/", profesoresPost);

// router.put("/:id", );

// router.delete("/:id", );

module.exports = router;
