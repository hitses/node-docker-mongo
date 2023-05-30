import express from 'express' // Importar el paquete Express
import './db.js' // Importar la conexión a la base de datos

const app = express() // Crear una instancia de Express

// Ruta de ejemplo para obtener un mensaje en la raíz del servidor
app.get('/', async (req, res) => {
  try {
    res.json('Hello world')
  } catch (error) {
    res.status(500).json({ error: 'Error in "/"' })
  }
})

export default app // Exportar la aplicación de Express
