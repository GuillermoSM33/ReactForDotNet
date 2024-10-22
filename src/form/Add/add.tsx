import React from "react";
import { Helmet } from "react-helmet";

function Add() {
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Escribe el nombre del estudiante"
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
