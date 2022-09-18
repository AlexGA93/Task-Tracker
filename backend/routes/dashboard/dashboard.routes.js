const { Router } = require("express");

const {
  getAllCards,
  addCard,
  updateCard,
  deleteCard,
  getCardById,
} = require("../../controllers/dashboard/card.controller");

const router = Router();

// add card to database
router.post("/", addCard);
// get cards from database
router.get("/:user_id/all", getAllCards);
// get card by id
router.get("/:user_id/:id", getCardById);

// update card information
router.put("/:user_id/:id", updateCard);
// delete card from database
router.delete("/:user_id/:id", deleteCard);

module.exports = router;
