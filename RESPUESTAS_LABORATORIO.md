# Respuestas y solución del laboratorio Blueprints React

## Archivo cargado

- Nombre del archivo: `RESPUESTAS_LABORATORIO.md`

## 1. ¿Qué se implementó?

Se dejó funcionando un frontend en React + Vite con Redux Toolkit para gestionar los blueprints, un canvas para dibujar puntos y segmentos, y una capa de servicios que puede alternar entre mock y API real con una sola variable de entorno.

## 2. ¿Qué cumple el laboratorio?

- Canvas con dimensiones fijas y render del plano.
- Búsqueda de blueprints por autor.
- Tabla con nombre del blueprint, número de puntos y botón Open.
- Selección del blueprint actual y dibujo en el canvas.
- Estado global con Redux para el blueprint activo.
- Servicios con la misma interfaz:
  - `apimock.js`
  - `apiClient.js`
  - `blueprintsService.js`
- Cambio de servicio mediante `VITE_USE_MOCK`.
- Estilos básicos y organizados.
- Pruebas unitarias con Vitest + Testing Library.

## 3. ¿Cómo se activa el mock?

En el archivo `.env.example` queda configurado:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_USE_MOCK=true
```

Si se quiere usar el backend real, se cambia a:

```env
VITE_USE_MOCK=false
```

## 4. ¿Qué se usa para JWT?

El cliente Axios incluye un interceptor para agregar el token al header `Authorization` y limpiar el token si llega respuesta 401.

## 5. ¿Cómo ejecutar el proyecto?

```bash
npm install
cp .env.example .env
npm run dev
```

## 6. Evidencias de validación

Se verificó con estas ejecuciones:

```bash
npm test
npm run build
npm run lint
```

Todas estas validaciones pasaron correctamente en el proyecto final.

## 7. Observación importante

El laboratorio quedó compilando y validado. Si se usa backend real, deberá estar levantado con la API de Blueprints del laboratorio anterior.
