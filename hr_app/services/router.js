const express = require("express");
const router = new express.Router();
const employees = require("../controller/employees.js");
const departments = require("../controller/departments.js");
const applicants = require("../controller/applicants.js");
const designations = require("../controller/designations.js");
const documents = require("../controller/documents.js");
const documentstatus = require("../controller/documentstatus.js");

router.route("/employees/:id?").get(employees.getEmployee);
router.route("/employees").get(employees.getAllEmployees);
router.route("/login").post(employees.loginUser);
router.route("/departments/:id?").get(departments.getDepartment);
router.route("/departments").get(departments.getAllDepartments);
router.route("/applicants/:id?").get(applicants.getApplicant);
router.route("/applicants").get(applicants.getAllApplicants);
router.route("/designations/:id?").get(designations.getDesignation);
router.route("/designations").get(designations.getAllDesignations);
router.route("/documents/:id?").get(documents.getDocument);
router.route("/documents").get(documents.getAllDocuments);
router
  .route("/documentstatus/:empid?/:id?")
  .get(documentstatus.getDocumentstatus);
router.route("/all/documentstatus").get(documentstatus.getAllDocumentstatus);

module.exports = router;
//documentstatus
