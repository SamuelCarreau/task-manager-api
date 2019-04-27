const mongoose = require('mongoose')

const bdUrl = process.env.MONGODB_URL

mongoose.connect(bdUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

