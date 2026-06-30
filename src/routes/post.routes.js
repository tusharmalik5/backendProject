const express = require("express")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage()})

const postRouter = express.Router()

const postController = require("../controllers/post.controller") 


postRouter.post("/",upload.single("image"), postController.createPostController)


postRouter.get("/",postController.getPostController)


postRouter.get("/details/:postId",postController.getPostDetailsController)



module.exports = postRouter 