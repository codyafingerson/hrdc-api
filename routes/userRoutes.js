const express = require("express");
const router = express.Router();
const { createNewUser, loginUser, getUserDetails, deleteUser, getAllUsers } = require("../controllers/userController");
const {requireAuth, requireAdmin} = require("../middleware/authMiddleware");

router.post("/login", loginUser);

router.get("/details", requireAuth, getUserDetails);

// Admin routes
router.delete("/delete/:id", requireAuth, requireAdmin, deleteUser);

router.post("/create", requireAuth, requireAdmin, createNewUser);

router.get("/all", requireAuth, requireAdmin, getAllUsers);

module.exports = router;