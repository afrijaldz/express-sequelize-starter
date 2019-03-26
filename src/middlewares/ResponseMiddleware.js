module.exports = (req, res) => {
  const { data } = req;
  const meta = req.meta ? req.meta : null;
  const status = req.status ? req.status : 'OK';
  const message = req.message ? req.message : '';

  return res.status(status === 'OK' ? 200 : 500).json({
    status,
    message,
    meta,
    data,
  });
};
