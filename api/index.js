const app = require('express')()
module.exports = { path: '/api', handler: app }

app.get('/ping', (_req, res) => {
  res.json({
    message: 'Pong!',
  })
})
