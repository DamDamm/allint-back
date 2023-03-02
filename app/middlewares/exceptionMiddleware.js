// Permet de récupérer toutes les exceptions de notre app
module.exports = function (req, res, next) {
  try {
    next();
  } catch (error) {
    req.status(401).json({ error });
  }
};
