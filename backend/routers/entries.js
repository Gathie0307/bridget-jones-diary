const { Router } = require('express');

const entryController = require('../controllers/entries');

const entryRouter = Router();


entryRouter.get("/", entryController.index);
//shows all entries
entryRouter.get("/recent", entryController.getRecent);
//show recent entries
//entryRouter.get("/search", entryController.search)
//show entry by date/month/year or category
entryRouter.get("/:id", entryController.show);
//show entry by ID
entryRouter.post("/", entryController.create);
//add entry
entryRouter.delete("/:id", entryController.destroy);
//delete entry
entryRouter.patch("/:id", entryController.update);
//update entry

module.exports = entryRouter;
