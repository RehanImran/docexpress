const applicants = require("../db_apis/applicants.js");

async function getApplicant(req, res, next) {
  try {
    const context = {};

    context.id = req.params.id;
    const rows = await applicants.find(context);

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

async function getAllApplicants(req, res, next) {
  try {
    const context = {};
    const rows = await applicants.find(context);

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

module.exports = { getApplicant, getAllApplicants };
