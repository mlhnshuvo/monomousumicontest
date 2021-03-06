const User = require("../Model/User");
const Awards = require("../Model/Awards");
const serverError = require("../utils/serverError");
const articleValidator = require("../validations/awardValidation");

const giveAwards = (req, res) => {
  const { email, award } = req.body;
  const validation = articleValidator({ email, award });
  if (validation.isValid) {
    User.findOne({ email: email })
      .then((findresponse) => {
        if (findresponse) {
          new Awards({ author: findresponse._id, awardName: award })
            .save()
            .then(() => {
              Awards.find()
                .populate("author")
                .then((response) => {
                  res.status(200).json({
                    response,
                    message: "You give the award to " + findresponse.name,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "User not found",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const getAllAwards = (req, res) => {
  Awards.find()
    .populate("author")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getAwards = (req, res) => {
  Awards.find({ author: req.user._id })
    .populate("author")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = { giveAwards, getAwards, getAllAwards };
