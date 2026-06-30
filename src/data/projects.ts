export const projects = [
	{
		name: "Asadero BAME",
		label: "Proyecto destacado",
		description:
			"Aplicación full stack para pedidos, reservas y administración de un asadero. El proyecto cubre autenticación, pagos, panel interno y control de stock.",
		technologies: ["Angular", "Symfony", "PostgreSQL", "Supabase", "Stripe", "Railway", "Vercel"],
		metrics: ["Autenticación", "Stripe", "Panel admin", "Stock", "Despliegue"],
		image: "/imgs/bame.png",
		demoUrl: "https://asaderobame.com/home",
		featured: true,
	},
	{
		name: "Vaultly",
		label: "Producto personal",
		description:
			"Aplicación para organizar videojuegos, películas, series, libros y conciertos en un único espacio, con APIs externas y seguimiento personalizado.",
		technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "APIs externas"],
		metrics: ["Colecciones", "Supabase", "APIs", "Filtros"],
		image: "/imgs/vaultly.png",
		demoUrl: "https://vaultlytracker.com/",
		featured: false,
	},
	{
		name: "LinkVault",
		label: "Herramienta web",
		description:
			"Gestor de enlaces pensado para guardar recursos importantes, clasificarlos y acceder rápido a ellos desde una interfaz clara.",
		technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
		metrics: ["CRUD", "Organización", "Buscador", "Favoritos"],
		image: "/imgs/linkvault.png",
		demoUrl: "https://nattprzz.github.io/linkvault/",
		featured: false,
	},
];
