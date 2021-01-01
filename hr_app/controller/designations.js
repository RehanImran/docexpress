const designations = require("../db_apis/designations.js");

async function getDesignation(req, res, next) {
  try {
    const context = {};

    context.id = req.params.id;
    const rows = await designations.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res
          .status(200)
          .json({ status: "fail", errorMessage: "Record Not Found." });
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

async function getAllDesignations(req, res, next) {
  try {
    const context = {};
    const rows = await designations.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res
          .status(200)
          .json({ status: "fail", errorMessage: "Record Not Found." });
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { getDesignation, getAllDesignations };
