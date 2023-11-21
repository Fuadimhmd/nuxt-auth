const middleware = {}

middleware['isAuthenticated'] = require('..\\middleware\\isAuthenticated.js')
middleware['isAuthenticated'] = middleware['isAuthenticated'].default || middleware['isAuthenticated']

middleware['isNotAuthenticated'] = require('..\\middleware\\isNotAuthenticated.js')
middleware['isNotAuthenticated'] = middleware['isNotAuthenticated'].default || middleware['isNotAuthenticated']

export default middleware
