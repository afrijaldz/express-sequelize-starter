exports.response = (req, res) => {
  const { data } = req;
  const meta = req.meta ? req.meta : null;
  const status = 'OK';
  const message = '';

  return res.json({
    status,
    message,
    meta,
    data,
  });
};
