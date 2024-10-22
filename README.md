# 1. Generar un proyecto con React 18 y TypeScript
   
Usa create-react-app para generar un nuevo proyecto con React 18 y TypeScript:

npx create-react-app nombre-del-proyecto --template typescript

Este comando generará un proyecto con React 18 y configurado para usar TypeScript. Reemplaza nombre-del-proyecto con el nombre que desees para tu proyecto.

# 2. Instalar react-router-dom
Una vez que el proyecto esté generado, instala react-router-dom para manejar las rutas en tu aplicación:

npm install react-router-dom

Esto instala react-router-dom en la versión más reciente compatible con React 18.

# 3. Instalar react-helmet

Para manejar dinámicamente el contenido del <head> de tu página, como cambiar el título, instala react-helmet:

npm install react-helmet

Para proyectos con TypeScript, también necesitarás instalar los tipos de react-helmet:

npm install --save-dev @types/react-helmet
