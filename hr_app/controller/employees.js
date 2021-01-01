const employees = require("../db_apis/employees.js");

async function getEmployee(req, res, next) {
  try {
    const context = {};

    context.id = req.params.id;
    const rows = await employees.find(context);

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

async function getAllEmployees(req, res, next) {
  try {
    const context = {};
    const rows = await employees.find(context);

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

async function loginUser(req, res) {
  if (req.body) {
    try {
      const { username, password } = req.body;
      const user = await employees.login(username, password);
      if (user.length) {
        res.json(user[0]);
      } else {
        res.json({
          status: "failed",
          message: "email and password is incorrect.",
        });
      }
    } catch (err) {
      res.status(200).json({ status: "failed", login: false });
    }
  }
  res.json({ status: "failed", login: false });
}

module.exports = { getEmployee, getAllEmployees, loginUser };
