const express = require("express");

// Import bootcamps controller
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampInRadius,
  bootcampPhotoUpload
} = require("../controllers/bootcamps");

const Bootcamp = require("../models/Bootcamp");
const advancedResults = require("../middlewares/advancedResults");

// Include other resourse router
const courseRouter = require("./courses");

const router = express.Router();

const { protect } = require("../middlewares/auth");

// Re-route into other resource router
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampInRadius);

router.route("/:id/photo").put(protect, bootcampPhotoUpload);

router
  .route("/")
  .get(advancedResults(Bootcamp, "courses"), getBootcamps)
  .post(protect, createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;
