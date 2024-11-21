import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req, file, cb){
        cb(null, file.originalname); // Ensure this directory exists
    }
});

// Define file filter to accept only certain types (e.g., jpg, png)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const isValid = allowedTypes.test(file.mimetype);
    cb(null, isValid);
};

const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 2 * 1024 * 1024 } }); // 2 MB limit


export default upload