const documentstatus = require("../db_apis/documentstatus.js");

async function getDocumentstatus(req, res, next) {
  try {
    const context = {};

    context.employee_id = req.params.empid;
    context.document_id = req.params.id;
    const rows = await documentstatus.find(context);

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

async function getAllDocumentstatus(req, res, next) {
  try {
    const context = {};
    const rows = await documentstatus.find(context);

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

module.exports = { getDocumentstatus, getAllDocumentstatus };
