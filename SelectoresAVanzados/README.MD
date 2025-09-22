


# Demostración de Selectores CSS Avanzados

Este proyecto es una página HTML sencilla diseñada para demostrar el poder y la utilidad de varios selectores CSS avanzados. Muestra cómo apuntar a elementos HTML específicos basándose en sus atributos, su relación con otros elementos y su posición dentro de la estructura del documento.

## 📄 Archivos

* `SelectoresAvanzados.html`: Este es el archivo HTML principal que contiene la estructura y el contenido de la página web. Incluye varios elementos como imágenes, artículos, párrafos, encabezados y listas para servir como objetivos para los selectores CSS.
* `selectoresavanzandos.css`: Este archivo CSS contiene todas las reglas de estilo que se aplican al archivo HTML. Cada regla utiliza un selector avanzado diferente para apuntar a elementos específicos.

---

## 🚀 Explicación de los Selectores CSS

A continuación, se desglosan los selectores CSS utilizados en este proyecto y lo que hacen.

### **Selectores de Atributos**

Estos selectores apuntan a elementos basándose en la presencia o el valor de sus atributos.

* `img[alt]`: Selecciona todos los elementos `<img>` que tienen un atributo `alt`. En el ejemplo, añade un borde azul sólido al logo.
* `img[src="img/logo.png"]`: Selecciona el elemento `<img>` con un atributo `src` que coincide exactamente con "img/logo.png". Establece un ancho específico para el logo.
* `img[src^="img/"]`: Selecciona los elementos `<img>` cuyo valor del atributo `src` **comienza con** "img/". Se utiliza para aplicar un ancho común a todas las imágenes dentro de esa carpeta.
* `img[src$=".png"]`: Selecciona los elementos `<img>` cuyo valor del atributo `src` **termina en** ".png". Podría usarse para aplicar un estilo a todas las imágenes PNG.
* `img[src*="mg/"]`: Selecciona los elementos `<img>` cuyo valor del atributo `src` **contiene** la subcadena "mg/".
* `article[class~="resaltado"]`: Selecciona los elementos `<article>` que tienen "resaltado" como una de las palabras en su atributo `class` (separadas por espacios).
* `article[class|="ingles"]`: Selecciona los elementos `<article>` cuyo valor del atributo `class` es exactamente "ingles" o comienza con "ingles" seguido de un guion.

[Imagen de selectores de atributo CSS en código]

### **Combinadores**

Estos selectores funcionan según la relación entre los elementos.

* `div > p`: **Combinador de Hijo Directo**. Selecciona todos los elementos `<p>` que son hijos directos de un elemento `<div>`. Estos párrafos se colorean de azul.
* `div p`: **Combinador de Descendiente**. Selecciona todos los elementos `<p>` que están en cualquier lugar dentro de un elemento `<div>`. Estos párrafos se colorean de rojo. Debido a la cascada en CSS, esta regla anulará la regla `div > p`.
* `h2 + p`: **Combinador de Hermano Adyacente**. Selecciona el primer elemento `<p>` que está inmediatamente después de un elemento `<h2>`. Este párrafo se colorea de gris.
* `h2 ~ p`: **Combinador de Hermano General**. Selecciona todos los elementos `<p>` que son hermanos de un elemento `<h2>` y vienen después de él. Estos párrafos se colorean de verde.

### **Pseudoclases**

Estos selectores apuntan a elementos según su estado o posición.

* `:not(#referencias)`: La **pseudoclase de negación** selecciona todos los elementos `<section>` excepto el que tiene el ID "referencias".
* `:nth-child(odd)` y `:nth-child(even)`: Seleccionan los elementos `<li>` dependiendo de si son un hijo impar o par en la lista.
* `:nth-child(5)`: Selecciona el quinto elemento `<li>`.
* `:nth-last-child(2)`: Selecciona el segundo elemento `<li>` comenzando desde el final de la lista.

### **Pseudoelementos**

Estos selectores dan estilo a una parte específica de un elemento.

* `p::first-line`: Selecciona y da estilo a la primera línea de texto dentro de cualquier elemento `<p>`, haciéndola roja y en negrita.

[Imagen de pseudoelementos de CSS estilizando texto]

### **Selectores de Agrupación**

Puedes aplicar los mismos estilos a múltiples selectores separándolos con una coma.

* `#resumen, #experimento, #pruebas, #resultados, #conclusiones`: Esta regla aplica el color de texto rojo a todos los elementos `<section>` con estos IDs específicos.

---

## 💻 Cómo Visualizarlo

1.  Asegúrate de que tanto `SelectoresAvanzados.html` como la carpeta `css` (que contiene `selectoresavanzandos.css`) estén en el mismo directorio.
2.  El archivo HTML también espera una carpeta `img` con el archivo `logo.png` adentro.
3.  Abre el archivo `SelectoresAvanzados.html` en cualquier navegador web para ver los estilos aplicados.