
// mongoose
const mongoose = require('mongoose');

// Connection URL
var url = process.env.MONGOD_CONNECT_URL || 'mongodb://localhost:27017/sports';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });










