const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
exports.mongoDb = {
  url: "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true"
};