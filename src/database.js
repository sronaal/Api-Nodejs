const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin123@emigrantcluster.mpa8t.mongodb.net/login?retryWrites=true&w=majority")
.then(() => console.log("DB Activa"))
.catch((error) => console.log(error))
