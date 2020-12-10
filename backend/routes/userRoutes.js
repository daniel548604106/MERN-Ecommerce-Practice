const express = require("express")
const asyncHandler = require("express-async-handler")
const router = express.Router()
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/userController")
const protect = require("../middleware/authMiddleware")

// Route
router.route("/").post(registerUser)
router.post("/login", authUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

module.exports = router
