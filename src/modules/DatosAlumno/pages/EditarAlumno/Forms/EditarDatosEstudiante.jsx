import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { estudiantesAPI } from "@/api/ApiRutas";
import { Height } from "@mui/icons-material";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    backgroundColor: "#F3F4F6",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "1200px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    border: "none",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const ModalEditarEstudiante = ({
  isOpen,
  onRequestClose,
  studentId,
  headers,
}) => {
  const [studentData, setStudentData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (studentId) {
      axios
        .get(`${estudiantesAPI}${studentId}/`, { headers })
        .then((response) => {
          setStudentData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
          setError("Error fetching student data");
          setLoading(false);
        });
    }
  }, [studentId, headers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .patch(`${estudiantesAPI}${studentId}/`, studentData, { headers })
      .then((response) => {
        console.log("Student data updated successfully:", response.data);
        setLoading(false);
        onRequestClose();
      })
      .catch((error) => {
        console.error("Error updating student data:", error);
        setError("Error updating student data");
        setLoading(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Editar Estudiante"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <img
              src={
                studentData.ruta_fotografia ||
                "https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-580x580.jpg"
              }
              alt="Fotografía del Estudiante"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Editar Datos del Estudiante
          </h2>
          {loading ? (
            <div className="text-center">Cargando...</div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-4 gap-4">
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    value={studentData.nombres || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    name="apellido_paterno"
                    value={studentData.apellido_paterno || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    name="apellido_materno"
                    value={studentData.apellido_materno || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Sexo
                  </label>
                  <input
                    type="text"
                    name="sexo"
                    value={studentData.sexo || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Departamento de Nacimiento
                  </label>
                  <input
                    type="text"
                    name="departamento_nacimiento"
                    value={studentData.departamento_nacimiento || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Provincia de Nacimiento
                  </label>
                  <input
                    type="text"
                    name="provincia_nacimiento"
                    value={studentData.provincia_nacimiento || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Distrito de Nacimiento
                  </label>
                  <input
                    type="text"
                    name="distrito_nacimiento"
                    value={studentData.distrito_nacimiento || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    name="fecha_nacimiento"
                    value={studentData.fecha_nacimiento || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Lengua Materna
                  </label>
                  <input
                    type="text"
                    name="lengua_materna"
                    value={studentData.lengua_materna || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Religión
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value={studentData.religion || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Parto
                  </label>
                  <input
                    type="text"
                    name="parto"
                    value={studentData.parto || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Número de Hermanos
                  </label>
                  <input
                    type="number"
                    name="numero_hermanos"
                    value={studentData.numero_hermanos || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Departamento de Domicilio
                  </label>
                  <input
                    type="text"
                    name="departamento_domicilio"
                    value={studentData.departamento_domicilio || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Provincia de Domicilio
                  </label>
                  <input
                    type="text"
                    name="provincia_domicilio"
                    value={studentData.provincia_domicilio || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Distrito de Domicilio
                  </label>
                  <input
                    type="text"
                    name="distrito_domicilio"
                    value={studentData.distrito_domicilio || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={studentData.direccion || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Cod IE de Procedencia
                  </label>
                  <input
                    type="text"
                    name="cod_ie_procedencia"
                    value={studentData.cod_ie_procedencia || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Nivel
                  </label>
                  <input
                    type="text"
                    name="nivel"
                    value={studentData.nivel || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Turno
                  </label>
                  <input
                    type="text"
                    name="turno"
                    value={studentData.turno || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Sección
                  </label>
                  <input
                    type="text"
                    name="seccion"
                    value={studentData.seccion || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label block text-sm font-medium text-gray-700">
                    Grado
                  </label>
                  <input
                    type="text"
                    name="grado"
                    value={studentData.grado || ""}
                    onChange={handleInputChange}
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                >
                  Guardar Cambios
                </button>
                <button
                  onClick={onRequestClose}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                >
                  Cerrar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalEditarEstudiante;
