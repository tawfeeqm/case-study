const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
exports.mongoDb = {
  url: process.env.MONGO_DB_URL
};