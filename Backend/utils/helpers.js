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
