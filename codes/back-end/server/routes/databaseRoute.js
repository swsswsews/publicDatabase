//get express router
const express = require('express');
const router = express.Router();

//get controller
const controller = require('../controllers/databases');

//add database
router.post("/addDatabase", controller.addDatabase)

//get database
router.get("/getDatabase/:id", controller.getDatabase)

/*
==========================================================contents management========================================================
*/

//display editable content
router.get("/getEditableContent", controller.getEditableContent)

//add table
router.post("/addTable", controller.editContent.addTable)

//delete table
router.delete("/deleteTable", controller.editContent.deleteTable)

//add column
router.post("/addColumn", controller.editContent.addColumn)
 
//delete column
router.delete("/deleteColumn", controller.editContent.deleteColumn)

//add value
router.post("/addValue", controller.editContent.addValue)
 
//delete value
router.delete("/deleteValue", controller.editContent.deleteValue)
  
//edit value
router.put("/editValue", controller.editContent.editValue)
  
//get data
router.get("/getData", controller.getData)

/*
==========================================================contents management========================================================
*/


//delete database
router.delete("/deleteDatabase", controller.deleteDatabase)

//export
module.exports = router;