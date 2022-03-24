const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
exports.mongoDb = {
  //I normally have the db config in an env file. 
  url: "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true"
};