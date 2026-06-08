# Addon Maker - Mini API Base

Una mini base **super sencilla** para crear APIs rápidamente.

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## 📍 Endpoints Disponibles

### Health Check
- **GET** `/health` - Verifica que el servidor está activo

### API Routes (`/api`)
- **GET** `/api/hello` - Saludo simple
- **GET** `/api/users/:id` - Obtener usuario por ID
- **POST** `/api/data` - Crear dato (requiere `name` y `value` en body)
- **GET** `/api/search?q=termino` - Buscar con parámetros

## 📝 Estructura

```
addon-maker/
├── server.js          # Servidor principal
├── routes/
│   └── api.js        # Rutas de API
├── package.json      # Dependencias
├── .env.example      # Variables de entorno
└── README.md         # Este archivo
```

## 🔧 Cómo Agregar Nuevas APIs

1. Abre `routes/api.js`
2. Añade tus nuevas rutas:

```javascript
router.get('/mi-ruta', (req, res) => {
  res.json({ data: 'mi respuesta' });
});
```

3. El servidor se recargará automáticamente en modo desarrollo

## 📦 Dependencias

- **express** - Framework web minimalista

## 💡 Ejemplos de Uso

### cURL
```bash
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/users/123
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"name":"test","value":42}'
```

### JavaScript
```javascript
fetch('/api/hello')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

**¡Listo para agregar tus APIs!** 🎉
