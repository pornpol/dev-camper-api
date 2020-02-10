const express = require("express");

// Import bootcamps controller
const { getCourses } = require("../controllers/courses");

const router = express.Router({ mergeParams: true });

router.route("/").get(getCourses);

module.exports = router;
