
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Empleados = () => {
  const [empleadosList, setEmpleadosList] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/empleados");
      setEmpleadosList(response.data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    }
  };

  const agregarEmpleado = async () => {
    try {
      await Axios.post("http://localhost:3001/create", {  
        nombre,
        edad,
        pais,
        cargo,
        anios
      });
      obtenerEmpleados();
      limpiarCampos();
      alert("¡Registro exitoso!");
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  const eliminarEmpleado = async (id) => {
    try {
      await Axios.delete(`http://localhost:3001/delete/${id}`);
      obtenerEmpleados();
      alert("¡Empleado eliminado correctamente!");
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  const limpiarCampos = () => {
    setNombre("");
    setEdad(0);
    setPais("");
    setCargo("");
    setAnios(0);
  };

  return (
    <div className="container">
     <h2>Gestión de Personal</h2>
       <form>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input type="number" className="form-control" value={edad} onChange={(e) => setEdad(e.target.value)} />         </div>
        <div className="form-group">
          <label>País:</label>
          <input type="text" className="form-control" value={pais} onChange={(e) => setPais(e.target.value)} />
         </div>
        <div className="form-group">
           <label>Cargo:</label>
           <input type="text" className="form-control" value={cargo} onChange={(e) => setCargo(e.target.value)} />
         </div>
        <div className="form-group">
           <label>Años de experiencia:</label>
           <input type="number" className="form-control" value={anios} onChange={(e) => setAnios(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={agregarEmpleado}>
           Agregar
         </button>
       </form>
       <hr />
      <h3>Listado de Empleados</h3>
       <table className="table">
        <thead>
           <tr>
            <th>Nombre</th>
             <th>Edad</th>
             <th>País</th>
            <th>Cargo</th>
             <th>Años de experiencia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(empleadosList) && empleadosList.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.nombre}</td>
              <td>{empleado.edad}</td>
              <td>{empleado.pais}</td>
              <td>{empleado.cargo}</td>
              <td>{empleado.anios}</td>
              <td>
                <button className="btn btn-danger" onClick={() => eliminarEmpleado(empleado.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>


      </table>
    </div>
  );
};

export default Empleados;
