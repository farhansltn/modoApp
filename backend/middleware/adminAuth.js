import jwt from "jsonwebtoken";

const adminAuth = async (req, rest, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return rest.json({
        success: false,
        message: "Not authorized! Please Loggin again!",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return rest.json({
        success: false,
        message: "Not authorized! Please Loggin again!",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    rest.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth
