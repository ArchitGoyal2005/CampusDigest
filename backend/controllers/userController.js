export const getMe = (req, res, next) => {
  res.status(200).json({
    data: req.user,
  });
};
