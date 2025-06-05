export const tryCatch = (controllerFunc) => {
  return async (req, res, next) => {
    try {
      await controllerFunc(req, res);
    } catch (error) {
      next(error);
    }
  };
};
export const logger = (req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
};
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
