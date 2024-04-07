
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empleados_crud"
});

app.post("/create", (req, res) => {
  const { nombre, edad, pais, cargo, anios } = req.body;
  const sql = "INSERT INTO empleados (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [nombre, edad, pais, cargo, anios], (err, result) => {
    if (err) {
      console.error("Error al agregar empleado:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.status(200).json({ message: "Empleado agregado exitosamente" });
    }
  });
});

app.get("/empleados", (req, res) => {
  const sql = "SELECT * FROM empleados";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener empleados:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM empleados WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("Error al eliminar empleado:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.status(200).json({ message: "Empleado eliminado exitosamente" });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
