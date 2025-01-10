# Tabs Component

Una librería de componentes de **Tabs** en React, con soporte para múltiples estilos, usando **TailwindCSS** y **Framer Motion** para las animaciones. Puedes personalizar los colores de fondo, texto y bordes, además de elegir entre diferentes estilos de tabs.

## Características

- Varios estilos de tabs predefinidos.
- Personalización fácil de colores (`bgColor`, `textColor`, `borderColor`(Solo en OutlineTabs.tsx)).
- Animaciones suaves con **Framer Motion**.
- Compatible con **React** y **TailwindCSS**.

## Instalación

Para instalar la librería en tu proyecto, usa **npm**:

```bash
npm install tabs-component
```

## Uso

Una vez que hayas instalado la librería, puedes importarla y usarla en tu proyecto React. Aquí te mostramos cómo hacerlo.

### Estructura de los props:

- `tabs`: Un array con objetos que contienen `id: <str>` y `label: <str>` para cada tab.
- `tabsContent`: Un objeto con el `id` de cada tab como clave y su contenido correspondiente como valor.
- `bgColor`: Color de fondo para los tabs (puedes usar las clases de TailwindCSS).
- `textColor`: Color del texto para los tabs (puedes usar las clases de TailwindCSS).
- `borderColor`: Usado en `OutlineTabs.tsx`, donde puedes definir el color del borde de los tabs.

### Ejemplo básico:

```tsx
import React from 'react';
import { PillTabs, OutlineTabs } from 'react-tabs-library';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About us' },
  { id: 'contact', label: 'Contact' },
];

const tabContent = {
  home: (<div>Contenido de Home</div>),
  about: (<div>Contenido de About us</div>),
  contact: (<div>Contenido de Contact</div>),
};

const App = () => {
  return (
    <div>
      {/* PillTabs */}
      <PillTabs
        tabs={tabs}
        tabsContent={tabContent}
        bColor="bg-blue-500"
        textColor="text-white"
      />

      {/* OutlineTabs */}
      <OutlineTabs
        tabs={tabs}
        tabsContent={tabContent}
        borderColor="border-red-500"
        textColor="text-black"
      />
    </div>
  );
};

export default App;
```

## Propiedades

| Propiedad       | Tipo           | Descripción                                               |
|-----------------|----------------|-----------------------------------------------------------|
| `tabs`          | `Array<Object>`| Un array con objetos `{ id: <str>, label: <str> }` para cada tab.       |
| `tabsContent`   | `Object`       | Un objeto con el contenido correspondiente a cada tab.    |
| `bgColor`       | `String`       | Color de fondo para los tabs (clase de TailwindCSS).      |
| `textColor`     | `String`       | Color de texto para los tabs (clase de TailwindCSS).      |
| `borderColor`   | `String`       | Solo para el estilo `OutlineTabs.tsx`. Define el color del borde (clase de TailwindCSS). |

## Estilos

Este componente está diseñado para usarse con **TailwindCSS**. Si no lo tienes configurado en tu proyecto, puedes agregarlo siguiendo la [guía oficial de TailwindCSS](https://tailwindcss.com/docs/installation).

## Personalización

Puedes personalizar los colores de fondo, texto y bordes de los tabs utilizando las clases estándar de TailwindCSS. Los valores esperados son clases como:

- `bg-blue-500`, `bg-red-500`, `bg-[#ffffff]` para `bgColor`.
- `text-white`, `text-black`, `text-[#ffffff]` para `textColor`.
- `border-red-500`, `border-green-500`, `border-[#ffffff]` para `borderColor`.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de abrir un *issue* o enviar un *pull request*. Toda ayuda es bienvenida.

## Licencia

Distribuido bajo la Licencia **MIT**. Ver el archivo para más detalles.
