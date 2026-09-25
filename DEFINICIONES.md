# 📖 Definiciones base

## Regresar a [README](./README.md)

## 🔹 Vite

Herramienta moderna para desarrollar aplicaciones frontend.

- Sirve como **servidor de desarrollo rápido** y como **empaquetador** para producción.
- Permite recargar la aplicación en caliente (_Hot Module Replacement_) sin reiniciar toda la página.

👉 En este laboratorio lo usamos para **montar la SPA en React** y empaquetar el proyecto final.

---

## 🔹 React

Librería de JavaScript para construir interfaces de usuario.

- Trabaja con **componentes** reutilizables.
- Permite crear aplicaciones dinámicas con un solo HTML (_Single Page Application_).

Aquí construimos los **componentes de la UI**: tablas, formularios y el lienzo (_canvas_).

---

## 🔹 Redux Toolkit

Conjunto de utilidades para manejar **estado global** en aplicaciones React.

- Centraliza la información de la app en un **store**.
- Usa **slices y reducers** para modificar el estado.
- Incluye **thunks** para manejar peticiones asíncronas.

En este laboratorio controlamos con Redux:

- La lista de autores y sus blueprints.
- El blueprint actualmente abierto en el canvas.
- Los estados de carga y error al llamar la API.

---

## 🔹 Axios

Cliente HTTP para consumir APIs desde el frontend.

- Simplifica llamadas `GET`, `POST`, `PUT`, `DELETE`.
- Permite configurar **interceptores** para agregar el token JWT a cada petición.
- Maneja errores de forma centralizada.

Aquí lo usamos para conectarnos con el backend de Blueprints (Labs 3 y 4).

---

## 🔹 Canvas

Elemento HTML `<canvas>` que permite dibujar gráficos en 2D/3D con JavaScript.

- Útil para representar visualmente figuras, gráficos o diagramas.
- En este laboratorio se usa para **pintar los puntos de un blueprint** y sus conexiones.

---

## 🔹 JWT (JSON Web Token)

Estándar para autenticar usuarios entre cliente y servidor.

- El servidor genera un token firmado cuando el usuario inicia sesión.
- El cliente guarda este token (ej: en `localStorage`) y lo envía en cada petición.
- El backend valida el token para autorizar el acceso a recursos protegidos.

Aquí se usa para **proteger la creación de blueprints**.

---

## 🔹 Linter (ESLint)

Herramienta que analiza el código en busca de errores, malas prácticas y estilo inconsistente.

- Detecta variables no usadas, imports incorrectos o código duplicado.
- Garantiza consistencia entre todos los desarrolladores del equipo.

En este laboratorio se usa **ESLint 9 (Flat Config)** para que los estudiantes entreguen un código limpio y mantenible.

---

## 🔹 Vitest + Testing Library

Framework de pruebas unitarias y de componentes para proyectos modernos en React.

- **Vitest** ejecuta las pruebas en Node con entorno `jsdom`.
- **Testing Library** permite renderizar componentes y simular interacciones de usuario.

Aquí validamos que los componentes (`Canvas`, `Form`, `Page`) funcionen correctamente.
