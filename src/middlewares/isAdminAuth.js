export default function isAdmin(req, res, next) {
  if (res.locals.user && res.locals.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ message: 'КУДА ЛЕТИЩЬ ЛЕЕЕ?????' });
}
