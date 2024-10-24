import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; 

function Add() {
  const navigate = useNavigate(); 
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    const studentData = {
      nombre: studentName,
      edad: parseInt(studentAge), 
      correo: studentEmail
    };

    try {
      const response = await fetch("https://localhost:7183/api/estudiantes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(studentData)
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const result = await response.json();

      if (result.succeeded) {
        alert("Estudiante agregado exitosamente"); 
        navigate("/"); 
      } else {
        alert(`Error: ${result.message || "No se pudo agregar el estudiante"}`);
      }
    } catch (error) {
      console.error("Error al agregar el estudiante:", error);
      alert("Error al agregar el estudiante");
    }
  };

  return (
    <>
      <Helmet>
        <title>Agregar Estudiantes</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-cyan-500 mb-8">
            Agregar Estudiante
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
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Escribe el nombre del estudiante"
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
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Escriba la edad del estudiante"
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
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Escribe el correo del estudiante"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all"
              >
                Agregar Estudiante
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
