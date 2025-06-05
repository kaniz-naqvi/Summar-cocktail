export const tryCatch = (controllerFunc) => {
  return async (req, res, next) => {
    try {
      await controllerFunc(req, res);
    } catch (error) {
      next(error); // pass to error-handling middleware
    }
  };
};
