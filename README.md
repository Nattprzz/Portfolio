# Portfolio de Natalia Perez

Portfolio personal desarrollado con Astro para presentar el perfil profesional, proyectos, stack tecnico, experiencia, formacion y vias de contacto de Natalia Perez como desarrolladora web.

## Caracteristicas

- Pagina principal con secciones de presentacion, sobre mi, proyectos, stack, experiencia, educacion y contacto.
- Pagina de contacto independiente.
- Componentes Astro organizados por secciones.
- Estilos globales con Tailwind CSS.
- Iconos mediante `astro-icon` y Tabler Icons.
- Recursos publicos para imagen de perfil, logos, capturas de proyectos, favicon y CV.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS 4
- Astro Icon
- Geist

## Estructura

```text
src/
  components/      Componentes principales del portfolio
  data/            Datos reutilizables, como proyectos
  layouts/         Layout base del sitio
  pages/           Paginas Astro
  styles/          Estilos globales
public/
  imgs/            Capturas de proyectos
  logos/           Logos y recursos graficos
  CV Natalia.pdf   CV publico
```

## Desarrollo

Instala las dependencias:

```sh
npm install
```

Arranca el servidor de desarrollo en segundo plano:

```sh
npm run dev
```

El script usa:

```sh
astro dev --background
```

Comandos utiles del servidor Astro:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Genera la version de produccion:

```sh
npm run build
```

Previsualiza el build:

```sh
npm run preview
```

## Personalizacion

- Edita los proyectos en `src/data/projects.ts`.
- Modifica las secciones en `src/components/`.
- Actualiza metadatos generales en `src/layouts/Layout.astro` y `src/pages/index.astro`.
- Sustituye imagenes, logos y CV desde `public/`.

## Licencia y atribucion

Este portfolio pertenece a Natalia Perez. Puedes consultar el codigo y usarlo como referencia, pero cualquier copia, adaptacion, redistribucion o publicacion basada en este proyecto debe incluir atribucion visible a la autora.

Consulta los terminos completos en [LICENSE](LICENSE).
