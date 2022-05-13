const mongoose = require('mongoose')

const connectionDB = 'mongodb+srv://Admin:1234@cluster1.eb35a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.set('debug', true)
mongoose
.connect(connectionDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log('Database is connected successfully!')
})
.catch(err => {
    console.log('Cannot connect to the database!', err)
    process.exit()
})