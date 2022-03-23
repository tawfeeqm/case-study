const app = require('./index');
const mongoose = require('mongoose');
const dbConfig = require('./src/api/config/db');

mongoose.connect(dbConfig.mongoDb.url, { useNewUrlParser: true }, () => { console.log('Connected to database!') });
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));