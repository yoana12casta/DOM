/*### 1. Mediante la utilización de la función setTimeout, modifica el DOM después de que transcurran 3 segundos. 
La función a ejecutar deberá crear dinámicamente un elemento h1 y un elemento p. 
El h1 debe tener el texto 'Modificando el DOM' y se le asignará un color de texto que puede ser rojo o verde. 
Por otro lado, el elemento p deberá contener un texto Lorem Ipsum y se le aplicará una clase específica 
que permitirá aplicar un estilo de fuente distinto al predeterminado.

Modifica el DOM de manera que, después de transcurrir 3 segundos utilizando la función setTimeout, 
se ejecute una función que realice lo siguiente:
1.    Crea dinámicamente un elemento h1 y asigna el texto "Modificando el DOM" como su contenido.
2.    Asigna al h1 un color de texto que puede ser rojo o verde.
3.    Crea dinámicamente un elemento p y asigna un texto Lorem Ipsum como su contenido.
4.    Asigna al p una clase específica que permitirá aplicar un estilo de fuente distinto al predeterminado. */

setTimeout(() => {
    // Crear elemento h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Modificando el DOM';
  
    // Asignar color de texto al h1 (rojo o verde)
    h1.style.color = 'red';
  
    // Crear elemento p con texto Lorem Ipsum
    const p = document.createElement('p');
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  
    // Asignar clase al elemento p para estilo de fuente distinto
    p.classList.add('fuente-especial');
  
    let contenedor = document.getElementById('contenedor')
    // Agregar elementos h1 y p al DOM
    contenedor.appendChild(h1);
    contenedor.appendChild(p);
  
  }, 3000);