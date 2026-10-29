export const productos = [
    // ---------- CAFÉS ----------
    { id: 1, categoria: "Cafés", nombre: "Café americano", precio: 2.00, agotado: false, descripcion: "", imagen: "/Imagenes/cafe-americano.jpg" },
    { id: 2, categoria: "Cafés", nombre: "Capuchino", precio: 2.50, agotado: false, descripcion: "", imagen: "/Imagenes/capuchino.jpg" },
    { id: 3, categoria: "Cafés", nombre: "Café latte", precio: 2.25, agotado: false, descripcion: "", imagen: "/Imagenes/cafe-latte.jpg" },
    { id: 4, categoria: "Cafés", nombre: "Chocolatada", precio: 2.00, agotado: false, descripcion: "", imagen: "/Imagenes/chocolatada.jpg" },
    { id: 5, categoria: "Cafés", nombre: "Expresso", precio: 1.50, agotado: false, descripcion: "", imagen: "/Imagenes/expresso.jpg" },
    { id: 6, categoria: "Cafés", nombre: "Doble expresso", precio: 2.00, agotado: false, descripcion: "", imagen: "/Imagenes/doble-expresso.jpg" },
    { id: 7, categoria: "Cafés", nombre: "Café bombón", precio: 2.50, agotado: false, descripcion: "", imagen: "/Imagenes/cafe-bombon.jpg" },
    { id: 8, categoria: "Cafés", nombre: "Carajillo", precio: 3.00, agotado: false, descripcion: "", imagen: "/Imagenes/carajillo.jpg" },

    // ---------- BEBIDAS (calientes) ----------
    { id: 9, categoria: "Bebidas", nombre: "Chocolatada Maderine", precio: 3.00, agotado: false, descripcion: "", imagen: "/Imagenes/chocolatada-maderine.jpg" },
    { id: 10, categoria: "Bebidas", nombre: "Té frutal variado", precio: 2.25, agotado: false, descripcion: "", imagen: "/Imagenes/te-frutal-variado.jpg" },
    { id: 11, categoria: "Bebidas", nombre: "Té mágico", precio: 2.50, agotado: false, descripcion: "", imagen: "/Imagenes/te-magico.jpg" },
    { id: 12, categoria: "Bebidas", nombre: "Té frutal frutos rojos", precio: 2.25, agotado: false, descripcion: "", imagen: "/Imagenes/te-frutal-frutos-rojos.jpg" },
    { id: 13, categoria: "Bebidas", nombre: "Yolo té frutos rojos", precio: 2.00, agotado: false, descripcion: "", imagen: "/Imagenes/yolo-te.jpg" },
    { id: 14, categoria: "Bebidas", nombre: "Aromáticas", precio: 1.50, agotado: false, descripcion: "", imagen: "/Imagenes/aromaticas.jpg" },

    // ---------- BEBIDAS (frías) ----------
    { id: 15, categoria: "Bebidas", nombre: "Affogato", precio: 3.00, agotado: false, descripcion: "", imagen: "/Imagenes/affogato.jpg" },
    { id: 16, categoria: "Bebidas", nombre: "Latte frío", precio: 2.25, agotado: false, descripcion: "", imagen: "/Imagenes/latte-frio.jpg" },
    { id: 17, categoria: "Bebidas", nombre: "Bubble té y coffee", precio: 3.80, agotado: false, descripcion: "", imagen: "/Imagenes/bubble.jpg" },
    { id: 18, categoria: "Bebidas", nombre: "Matcha", precio: 3.80, agotado: false, descripcion: "", imagen: "/Imagenes/matcha-frio.jpg" },
    { id: 19, categoria: "Bebidas", nombre: "Soda arcoíris", precio: 4.00, agotado: false, descripcion: "", imagen: "/Imagenes/soda-arcoiris.jpg" },
    { id: 20, categoria: "Bebidas", nombre: "Mocca", precio: 3.80, agotado: false, descripcion: "", imagen: "/Imagenes/mocca.jpg" },
    { id: 21, categoria: "Bebidas", nombre: "Strawberry mocca", precio: 3.80, agotado: false, descripcion: "", imagen: "/Imagenes/strawberry-mocca.jpg" },
    { id: 22, categoria: "Bebidas", nombre: "Lemon soda", precio: 2.50, agotado: false, descripcion: "", imagen: "/Imagenes/lemon-soda.jpg" },
    { id: 23, categoria: "Bebidas", nombre: "Jarra de jugo", precio: 5.00, agotado: false, descripcion: "", imagen: "/Imagenes/jarra-de-jugo.jpg" },
    { id: 24, categoria: "Bebidas", nombre: "Frappé", precio: 3.80, agotado: false, descripcion: "", imagen: "/Imagenes/frappe.jpg" },
    { id: 25, categoria: "Bebidas", nombre: "Taro explosivo", precio: 3.80, agotado: false, descripcion: "", imagen: "/Imagenes/taro-explosivo.jpg" },
    // TODO confirmar: en la carta salen dos precios (2.00 y 2.50) sin indicar cuál es jugo y cuál batido
    { id: 26, categoria: "Bebidas", nombre: "Jugos y batidos", precio: 2.00, agotado: false, descripcion: "Precios de 2.00 a 2.50", imagen: "/Imagenes/jugos-y-batidos.jpg" },

    // ---------- SALADOS ----------
    { id: 27, categoria: "Salados", nombre: "Tosta vegana", precio: 3.50, agotado: false, descripcion: "", imagen: "/Imagenes/tosta-vegana.jpg" },
    { id: 28, categoria: "Salados", nombre: "Tosta cherry", precio: 3.75, agotado: false, descripcion: "", imagen: "/Imagenes/tosta-cherry.jpg" },
    { id: 29, categoria: "Salados", nombre: "Tosta tumaca", precio: 3.25, agotado: false, descripcion: "", imagen: "/Imagenes/tosta-tumaca.jpg" },
    { id: 30, categoria: "Salados", nombre: "Sándwich de jamón", precio: 4.75, agotado: false, descripcion: "", imagen: "/Imagenes/sandwich-jamon.jpg" },
    { id: 31, categoria: "Salados", nombre: "Sándwich Maderine", precio: 4.50, agotado: false, descripcion: "", imagen: "/Imagenes/sandwich-maderine.jpg" },
    { id: 32, categoria: "Salados", nombre: "Club", precio: 7.25, agotado: false, descripcion: "", imagen: "/Imagenes/club.jpg" },
    { id: 33, categoria: "Salados", nombre: "Combo patacones", precio: 3.75, agotado: false, descripcion: "Incluye café, aromática o jugo", imagen: "/Imagenes/combo-patacones.jpg" },
    { id: 34, categoria: "Salados", nombre: "Combo yucas fritas", precio: 3.75, agotado: false, descripcion: "Incluye café, aromática o jugo", imagen: "/Imagenes/combo-yucas-fritas.jpg" },
    { id: 35, categoria: "Salados", nombre: "Tortillas de verde", precio: 4.00, agotado: false, descripcion: "", imagen: "/Imagenes/tortillas-de-verde.jpg" },
    { id: 36, categoria: "Salados", nombre: "Tigrillo", precio: 4.00, agotado: false, descripcion: "", imagen: "/Imagenes/tigrillo.jpg" },
    { id: 37, categoria: "Salados", nombre: "Tortillas de yuca", precio: 4.00, agotado: false, descripcion: "", imagen: "/Imagenes/tortillas-de-yuca.jpg" },
    // TODO confirmar precios: la carta no rotula cuál es cuál (se dedujo por las fotos)
    { id: 38, categoria: "Salados", nombre: "Tamales", precio: 1.50, agotado: false, descripcion: "Pídelos al vapor o fritos", imagen: "/Imagenes/tamales.jpg" },
    { id: 39, categoria: "Salados", nombre: "Humitas", precio: 1.25, agotado: false, descripcion: "Pídelas al vapor o fritas", imagen: "/Imagenes/humitas.jpg" },
    { id: 40, categoria: "Salados", nombre: "Quimbolitos", precio: 1.25, agotado: false, descripcion: "Pídelos al vapor o fritos", imagen: "/Imagenes/quimbolitos.jpg" },

    // ---------- DULCES ----------
    { id: 41, categoria: "Dulces", nombre: "Cheesecake frutos rojos", precio: 3.00, agotado: false, descripcion: "", imagen: "/Imagenes/cheesecake.jpg" },
    { id: 42, categoria: "Dulces", nombre: "Brownie con helado", precio: 3.00, agotado: false, descripcion: "", imagen: "/Imagenes/brownie.jpg" },
    { id: 43, categoria: "Dulces", nombre: "Tiramisú", precio: 2.50, agotado: false, descripcion: "", imagen: "/Imagenes/tiramisu.jpg" },
    { id: 44, categoria: "Dulces", nombre: "Chocolatísima", precio: 2.75, agotado: false, descripcion: "", imagen: "/Imagenes/chocolatisima.jpg" },
    { id: 45, categoria: "Dulces", nombre: "Muffin de temporada", precio: 1.50, agotado: false, descripcion: "", imagen: "/Imagenes/muffin.jpg" },
    { id: 46, categoria: "Dulces", nombre: "Helado de 2 sabores", precio: 2.50, agotado: false, descripcion: "", imagen: "/Imagenes/helado-2-sabores.jpg" }
];
