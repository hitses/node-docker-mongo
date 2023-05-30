// Configurar la conexión a la base de datos MongoDB
import mongoose from 'mongoose'

const URI = 'mongodb://localhost:27017/test'

mongoose.set('strictQuery', false)

mongoose
  .connect(URI)
  .then(() => console.log('Database is connected'))
  .catch(err => console.error('Error in MongoDB =>', err))
