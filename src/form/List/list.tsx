import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; 

// Define un tipo para los estudiantes
interface Student {
  id: number;
  nombre: string;
  edad: number;
  correo: string;
}

function List() {
  const [students, setStudents] = useState<Student[]>([]); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://localhost:7183/api/estudiantes/getestudiantes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data?.result && Array.isArray(data.result)) {
          setStudents(data.result); 
        } else {
          console.error("Data is not an array:", data);
          setStudents([]);
        }
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };

    fetchStudents();
  }, []);

  const deleteStudent = async (id: number) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este estudiante?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://localhost:7183/api/estudiantes/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el estudiante");
      }

      const result = await response.json();

      if (result.succeeded) {
        alert("Estudiante eliminado exitosamente");
        setStudents(students.filter(student => student.id !== id));
      } else {
        alert(`Error: ${result.message || "No se pudo eliminar el estudiante"}`);
      }
    } catch (error) {
      console.error("Error al eliminar el estudiante:", error);
      alert("Error al eliminar el estudiante");
    }
  };

  return (
    <>
      <Helmet>
        <title>Listado de Estudiantes</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-center text-3xl font-bold text-cyan-500 mb-6">
              Listado de Estudiantes
            </h1>
            <div className="flex justify-end mb-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                onClick={() => navigate("/add")} 
              >
                Agregar Estudiante
              </button>
            </div>
            <ul className="divide-y divide-gray-200">
              {students.map((student) => (
                <li key={student.id} className="py-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-800">{student.id}</span>
                  <span className="text-lg font-medium text-gray-800">{student.nombre}</span>
                  <span className="text-lg font-medium text-gray-800">{student.edad}</span>
                  <span className="text-lg font-medium text-gray-800">{student.correo}</span>
                  <div className="space-x-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all"
                      onClick={() => navigate(`/edit/${student.id}`)} 
                    >
                      Editar
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all" onClick={() => deleteStudent(student.id)} >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
