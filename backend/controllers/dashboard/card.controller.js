// express
const { request, response } = require("express");
// mongoose Schema
const Card = require("../../models/Card/Card");
const User = require("../../models/User/User");

// controllers
const addCard = async (req = request, res = response) => {
  const { user, title, subtitle, body } = req.body;

  console.log(user);

  try {
    // check if there's a card with the same title
    const dbCard = await Card.findOne({ title });
    const dbUser = await User.findById({ _id: user }).select("-password");

    // console.log(dbUser);

    // check for user to association
    if (!dbUser) {
      return res.status(400).json({
        process_ok: false,
        message: "User not found!",
      });
    } else if (dbCard) {
      return res.status(400).json({
        process_ok: false,
        message: "This card already exists",
      });
    }

    const payload = new Card({
      user: dbUser["_id"],
      title,
      subtitle,
      body,
    });

    await payload.save();

    return res.status(200).json({
      process_ok: true,
      message: "Card added successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      process_ok: false,
      message: "Error with card addition!",
    });
  }
};
const getAllCards = async (req = request, res = response) => {
  const { user_id } = req.params;

  try {
    const dbUser = await User.findById({ _id: user_id }).select("-password");
    // console.log(dbUser);

    if (!dbUser) {
      return res.status(400).json({
        process_ok: false,
        message: "User Not Found!",
      });
    }

    // find cards by user id
    const dbCards = await Card.find({ user: user_id });

    if (dbCards.length === 0) {
      return res.status(400).json({
        process_ok: false,
        message: "Cards Not Found!",
      });
    }

    return res.status(200).json({
      process_ok: true,
      card_list: dbCards,
    });
  } catch (error) {
    return res.status(400).json({
      process_ok: false,
      message: "Error obtaining cards!",
    });
  }
};
const getCardById = async (req = request, res = response) => {
  const { user_id, id } = req.params;

  try {
    const dbUser = await User.findById({ _id: user_id }).select("-password");

    if (!dbUser) {
      return res.status(400).json({
        process_ok: false,
        message: "User Not Found!",
      });
    }

    const dbCard = await Card.findById({ _id: id });

    if (!dbCard) {
      return res.status(400).json({
        process_ok: false,
        message: "Card Not Found!",
      });
    }

    return res.status(200).json({
      process_ok: true,
      card: {
        title: dbCard.title,
        subtitle: dbCard.subtitle,
        body: dbCard.body,
      },
    });
  } catch (error) {
    return res.status(400).json({
      process_ok: false,
      message: "Error obtaining card!",
    });
  }
};
const updateCard = async (req = request, res = response) => {
  // extract id from params
  const { user_id, id } = req.params;
  // extract new data from body
  const { title, subtitle, body } = req.body;

  try {
    const dbUser = await User.findById({ _id: user_id }).select("-password");
    console.log(dbUser.name);

    if (!dbUser) {
      return res.status(400).json({
        process_ok: false,
        message: "User Not Found!",
      });
    }

    // search into database
    const dbCard = await Card.findById({ _id: id });
    console.log(dbCard);

    if (!dbCard) {
      return res.status(400).json({
        process_ok: false,
        message: "Card Not Found!",
      });
    }

    // // update card
    dbCard.updateOne({ title, subtitle, body }, (err, docs) => {
      err ? console.log(err.message) : console.log("No error: ", docs);
    });

    // response message
    return res.status(200).json({
      process_ok: true,
      message: "Card updated successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      process_ok: false,
      message: "Error with card modification!",
    });
  }
};

const deleteCard = async (req = request, res = response) => {
  // extract id from params
  const { user_id, id } = req.params;

  try {
    const dbUser = await User.findById({ _id: user_id }).select("-password");

    if (!dbUser) {
      return res.status(400).json({
        process_ok: false,
        message: "User Not Found!",
      });
    }

    // check if there is an object
    const dbCard = await Card.findById({ _id: id });

    if (!dbCard) {
      return res.status(400).json({
        process_ok: false,
        message: "Card Not Found!",
      });
    }

    // make delete request
    await Card.deleteOne({ _id: id });

    return res.status(200).json({
      process_ok: true,
      message: "Card deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      process_ok: false,
      message: "Error with card Elimination!",
    });
  }
};

module.exports = { getAllCards, getCardById, addCard, updateCard, deleteCard };
