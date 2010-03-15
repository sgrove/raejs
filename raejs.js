bootstrap = require('./lib/bootstrap');
server = bootstrap.server
config = bootstrap.config

logger.verbose(config);
logger.info('Server running at http://localhost:8000/');
