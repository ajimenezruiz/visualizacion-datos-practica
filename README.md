# Práctica de Visualización de Datos

## Autor: Antonio Jiménez Ruiz
## Grado en Ciencia de Datos UOC

Enlace a GitHub Pages: [https://ajimenezruiz.github.io/visualizacion-datos-practica/](https://ajimenezruiz.github.io/visualizacion-datos-practica/)

## Planteamiento del Problema

Este proyecto estudia varios conjuntos de datos relacionados con la dimensión de los hogares (Household). Se pretende analizar la forma de vida de los habitantes de una unidad familiar y su relación con diversos factores como la vivienda, los ingresos, la educación, la edad, la ocupación, entre otros.

## Los Datos

A continuación, se presentan los datasets utilizados en este estudio, junto con sus respectivas fuentes:

- **ilc_mded01_linear.csv**: Proporción de los costos de vivienda en el ingreso disponible del hogar, clasificada por tipo de hogar y grupo de ingresos. [Fuente](https://ec.europa.eu/eurostat/databrowser/view/ilc_mded01/default/table?lang=en)
- **lfst_hheredty_linear.csv**: Tasa de empleo por sexo, grupos de edad, nivel de formación educativa y composición del hogar (%). [Fuente](https://ec.europa.eu/eurostat/databrowser/view/lfst_hheredty/default/table?lang=en)
- **lfst_hhindws_linear.csv**: Número de personas por sexo, grupos de edad, composición del hogar y situación laboral. [Fuente](https://ec.europa.eu/eurostat/databrowser/view/lfst_hhindws/default/table?lang=en)
- **lfst_hhwhchit_linear.csv**: Número promedio de hijos por hogar según la situación laboral dentro de los hogares y la composición del hogar. [Fuente](https://ec.europa.eu/eurostat/databrowser/view/lfst_hhwhchit/default/table?lang=en)

## Desarrollo

El proyecto ha sido desarrollado utilizando **three.js**, una biblioteca JavaScript que permite crear y mostrar gráficos animados en 3D en un navegador web.

### Preprocesamiento y Exploración de Datos

- **ajimenezruiz_pr1**: Este script se utiliza para preprocesar los datos y generar un archivo `df_final.csv`, que contiene los datos procesados listos para su análisis y visualización.
- **ajimenezruiz_pr2**: Este script se utiliza para explorar los datos y generar los datos específicos que se utilizarán en la visualización con three.js.

## Estructura del Proyecto

- **index.html**: Archivo principal que carga y muestra la visualización.
- **style.css**: Archivo de estilos para la página web.
- **main.js**: Archivo JavaScript principal donde se encuentran las funciones y lógica de la visualización con three.js.
- **data/**: Carpeta que contiene los datasets en formato CSV utilizados para el análisis.
- **scripts/**: Carpeta que contiene los scripts de preprocesamiento y exploración de datos (`ajimenezruiz_pr1` y `ajimenezruiz_pr2`).

## Instalación y Uso

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/ajimenezruiz/visualizacion-datos-practica.git
    ```
    Instalación de dependencias
    ```bash
    npm install
    ```

2. **Navegar al directorio del proyecto**:
    ```bash
    cd visualizacion-datos-practica
    ```


3. **Ejecutar los scripts de preprocesamiento y exploración de datos**:
    ```bash
    python scripts/ajimenezruiz_pr1.ipynb
    python scripts/ajimenezruiz_pr2.ipynb
    ```

4. **Compilado de los archivos con Eleventy**:
    Para visualización en servidor local
    ```bash
    npm install
    npm run server 
    ```

    Para compilar archivos de producción. Cambiar parámetros de src/_data/site.js para ajustar a tu entorno de producción.
    ```bash
    
    npm run buiild 
    ``````
    

5. **Abrir el archivo `index.html` en un navegador web** para ver la visualización.

 