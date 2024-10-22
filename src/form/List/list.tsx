import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; 

function List() {
  const [students, setStudents] = useState<string[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchStudents = async () => {
      const data = ["John Doe", "Jane Smith", "Alice Johnson"];
      setStudents(data);
    };

    fetchStudents();
  }, []);

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
              {students.map((student, index) => (
                <li key={index} className="py-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-800">{student}</span>
                  <div className="space-x-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all"
                      onClick={() => navigate("/edit")} 
                    >
                      Editar
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all">
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
