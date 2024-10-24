import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom"; 

function Edit() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`https://localhost:7183/api/estudiantes/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener el estudiante");
        }
        const data = await response.json();
        setStudentName(data.result.nombre);
        setStudentAge(data.result.edad.toString());
        setStudentEmail(data.result.correo);
      } catch (error) {
        console.error("Error al obtener el estudiante:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    const updatedStudent = {
      id: parseInt(id || "0"), 
      nombre: studentName,
      edad: parseInt(studentAge), 
      correo: studentEmail
    };

    try {
      const response = await fetch(`https://localhost:7183/api/estudiantes/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(updatedStudent)
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el estudiante");
      }

      const result = await response.json();
      if (result.succeeded) {
        alert("Estudiante actualizado exitosamente");
        navigate("/"); 
      } else {
        alert(`Error: ${result.message || "No se pudo actualizar el estudiante"}`);
      }
    } catch (error) {
      console.error("Error al actualizar el estudiante:", error);
      alert("Error al actualizar el estudiante");
    }
  };

  return (
    <>
      <Helmet>
        <title>Editar Estudiante</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Editar Estudiante
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="studentName"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Nombre del Estudiante
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={studentName} 
                onChange={(e) => setStudentName(e.target.value)} 
                required
              />
            </div>

            <div>
              <label
                htmlFor="studentAge"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Edad del Estudiante
              </label>
              <input
                type="number"
                id="studentAge"
                name="studentAge"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="studentEmail"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Correo del Estudiante
              </label>
              <input
                type="email"
                id="studentEmail"
                name="studentEmail"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all"
              >
                Guardar
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-all"
                onClick={() => navigate("/")}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
