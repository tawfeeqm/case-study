const app = require('./index');
const mongoose = require('mongoose');
const dbConfig = require('./src/api/config/db');
const port = process.env.PORT || 3000;

mongoose.connect(dbConfig.mongoDb.url, { useNewUrlParser: true }, () => { console.log('Connected to database!') });
app.listen(port, () => console.log(`Server started on port ${port}`));