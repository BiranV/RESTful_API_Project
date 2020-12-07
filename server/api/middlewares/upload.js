//import for multer
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "uploads/");
    },
    filename: (req,file,cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null,true);
    }
    cb(null,false);
}

//create the middleware (const upload) , execute for multer (the function)
const upload = multer({
   // dest: "uploads/",
   storage,
    limits:{
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;