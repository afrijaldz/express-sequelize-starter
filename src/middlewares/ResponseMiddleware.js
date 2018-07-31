const _ = require('lodash')

function ResponseMiddleware () {
  return (req, res) => {
    let data = []

    if (req.query.limit && req.query.page) {
      const limit = parseInt(req.query.limit)
      const page = parseInt(req.query.page)
      const offset = limit * page
      req.data.limit = limit
      req.data.offset = offset
    }

    const rawData = req.data
    let pagination = req.pagination

    if (Array.isArray(rawData)) {
      if (rawData) {
        rawData.forEach(r => {
          data.push(r)
        })
      }
    } else {
      data = rawData
    }

    let jsonRes = {
      status: true,
      message: _.get(req.response, 'message', 'OK'),
      meta: {},
      data: data
    }

    if (pagination) {
      jsonRes.meta.pagination = {
        page: parseInt(pagination.page),
        limit: parseInt(pagination.pageSize),
        total: parseInt(pagination.rowCount),
        pageCount: parseInt(pagination.pageCount)
      }
    }

    if (req.refresh_token) {
      jsonRes.meta.refresh_token = req.refresh_token
    }

    if (req.token) {
      jsonRes.meta.token = req.token
    }

    res.status(_.get(req.response, 'code', 200))
    res.json(jsonRes)
  }
}

module.exports = ResponseMiddleware()
