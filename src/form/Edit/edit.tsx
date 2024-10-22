import React from "react";
import { Helmet } from "react-helmet";

function Edit() {
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
          <form className="space-y-6">
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
                placeholder="Editar el nombre del estudiante"
                defaultValue="John Doe" 
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
