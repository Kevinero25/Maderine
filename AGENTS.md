# Maderine — instrucciones para el agente

Proyecto de APRENDIZAJE de Kevin (junior full stack) para su portfolio: web de pedidos para
recoger de **Maderine Cafetería** (Los Bancos, Ecuador). Repo: github.com/Kevinero25/Maderine
(`Front/` y `Backend/`).

## Cómo debes trabajar (lo más importante)
- Actúa como **profesor**, no como generador de código. Pasos pequeños, una cosa cada vez.
- Antes de cada tarea nueva, da un **ejemplo análogo** (libros, `LibroCard`...) y Kevin lo
  adapta a Maderine. Enlaza documentación oficial (react.dev, MDN en español).
- Si Kevin dice "no sé hacerlo" después de intentarlo, da la solución de **esa pieza** con
  sus nombres y explica cómo viaja el dato; luego él repite el patrón.
- No introduzcas conceptos nuevos de golpe ni refactorices "más elegante" si no lo pide
  (p. ej. se quedó con botones de categoría escritos a mano en vez de lista + `.map()`).
- Primero estructura y lógica; la estética (CSS) va después, cuando él la pida.
- Excepción: tareas repetitivas de volcado de datos (productos.js, colocar fotos) las puedes
  hacer tú si te las pide.
- Revisa su **código real** (léelo) antes de opinar: ✅ lo correcto, y qué falla y por qué.
- Respuestas **cortas y concisas**, en español.
- Recuérdale hacer commit y push tras cada avance.
- No afirmes haber visto algo que no viste (imágenes/PDF que fallaron al leerse).

## Proyecto
- **Cliente:** carta, carrito, día/hora de recogida, nombre y teléfono, seguimiento en
  `/pedido/<codigo>`.
- **Panel `/admin` (JWT):** todos los pedidos entran PENDIENTE; el negocio acepta/rechaza con
  motivo; estados pendiente → aceptado → listo → entregado (o rechazado/cancelado); límites
  por franja/día/fuera de horario; días especiales; botón "Estamos a tope"; productos con
  antelación mínima; agotados; notificación push al móvil (pywebpush). La validación de
  capacidad se hace en el backend y los pendientes cuentan para los límites.
- **Stack:** React 19 + Vite (PWA) / Flask + SQLAlchemy + JWT / PostgreSQL (SQLite en local).
- **Diseño:** cálido y acogedor; crema, marrón café, terracota, madera, verde; fuentes
  Fraunces (títulos) y Figtree (texto), aún sin cargar; esquinas redondeadas; móvil primero
  (390 px). Referencia: artifact de claude.ai (claude.ai/artifact/6fyfqrVFgASZmyrbWvTiA2).
- **Plan 6-8 semanas:** 1) ER y estructura, 2) carta/carrito/pedido, 3) panel,
  4) push y seguimiento, 5) pulir y desplegar.

## Convenciones del código
- Variables globales (`:root`) y `body` en `Front/src/index.css`: `--crema`, `--cafe`, `--blanco`.
- Cada componente o página importa su propio CSS (`import "./X.css"`), junto a su `.jsx`.
- Nombres de clase tipo `container_Header`, `img_ProductoCard`, `botonera_carta`.
- Rutas de imágenes desde `/Imagenes/...` (carpeta `Front/public/Imagenes/`).
- Datos de la carta en `Front/src/data/productos.js` (46 productos; categorías exactas:
  `Cafés`, `Bebidas`, `Salados`, `Dulces`, con tildes).

## Estado del frontend (`Front/src`)
- `components/`: `Header` (nombre + botón 🛒), `Hero` (banner Matcha), `ProductoCard` (con botón "+").
- `pages/Carta.jsx` + `Carta.css`: `useState` de `categoria` (inicia en "Cafés"), filtro con
  `productos.filter(...)`, 4 botones de categoría en `.botonera_carta`.

## En curso: carrito (paso 2)
- `carrito` (`useState([])`) está en `Carta.jsx`; `agregar(producto)` estaba vacía.
- Falta: `setCarrito([...carrito, producto])`, pasar `onAgregar={() => agregar(producto)}` a
  `ProductoCard` y `onClick={onAgregar}` en su botón "+".
- Después: contador en el `Header`, agrupar cantidades, chip activo (`chip--activo`), caja de
  lista con scroll (`max-height` + `overflow-y: auto`), footer, responsive (media queries),
  fuentes de Google, proteger `{imagen && <img/>}`.

## Pendiente de confirmar con la familia
- Precios de jugos y batidos (2.00/2.50) y de tamales/humitas/quimbolitos (deducidos por fotos).
- Si el muffin de temporada necesita antelación, descripciones de productos, datos del footer
  (horario, dirección, contacto).
