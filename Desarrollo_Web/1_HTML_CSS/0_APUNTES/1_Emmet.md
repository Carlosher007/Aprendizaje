# ¿ Que es Emmet?

Emmet es un plugin que existe para la mayoría de los editores de texto comunes, pensado para mejorar tu flujo de trabajo, e inspirado en los selectores de CSS “CSS Selectors”, por lo que si sabes algo de CSS ya sabes algo de Emmet, pero lo puedes aplicar en HTML

> Recuerda que : _Al escribir una abreviatura y/o comando pulsa “Enter” o “Tab” para producir el resultado en HTML, pulsa “undo” (ctrl+z) para volver al código Emmet_

# Operadores Principales

## Operador Hermanos (+)

> Use el operador + para colocar elementos cerca uno del otro, en el mismo nivel:

- Sintaxis Emmet

```html
div+h1+h2

div+p+bq
```

- Sintaxis en HTML

```html
<div></div>
<h1></h1>
<h2></h2>

<div></div>
<p></p>
<blockquote></blockquote>
```

## Operador Hijo (>)

> Utilizado para anidar elementos uno dentro dentro de otro

- Sintaxis Emmet

```html
div>h1

div>article>p
```

- Sintaxis en HTML

```html
<div>
  <h1></h1>
</div>

<div>
  <article>
    <p></p>
  </article>
</div>
```

## Operdador de atributo de clase (.)
> Para especificar la clase (class) a la que pertenece el elemento

- Sintaxis Emmet

```html
div.row

div.row>h1.title
```

- Sintaxis en HTML

```html
<div class=”row”></div>

<div class=”row”>
    <h1 class=”title”></h1>
</div>
```

## Operador id
> Para especificar el id del elemento

- Sintaxis Emmet

```html
div#myDiv
```

- Sintaxis en HTML

```html
<div id=”myDiv”></div>
```

## Texto ( {} )
> Para escribir texto en el elemento

- Sintaxis Emmet

```html
h1{hello}
```

- Sintaxis en HTML

```html
<h1>hello</h1>
```

## Notación de Atributos ( [] )
> Para especificar cualquier otro atributo del elemento

- Sintaxis Emmet

```html
td[title=“Hello world!”]
```

- Sintaxis en HTML

```html
<td title=”Hello world!”>
</td>
```

## Multiplicación (*)
> Para definir cuántas veces se debe enviar el elemento:

- Sintaxis Emmet

```html
li*3
```

- Sintaxis en HTML

```html
<li></li>
<li></li>
<li></li>
```

## Numeración de elementos ($)
> Con el operador de multiplicación * puedes repetir elementos, pero con $ puedes enumerarlos. Coloca el operador $  dentro del nombre del elemento, el nombre del atributo o el valor del atributo para generar el número actual del elemento repetido

- Sintaxis Emmet

```html
ul>li*3{$}
```

- Sintaxis en HTML

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```

## Subir de nivel (^)
Al utilizar el operador > Hijo, Emmet entra al subnivel del elemento solicitado como en: div>ul>li

Dará como resultado:
```html
<div>
    <ul>
        <li></li> <- nivel actual
    </ul>
</div>
```

Sin embargo, si deseamos continuar la expresión en un nivel superior al nivel en que termina la expresión podremos utilizar el comando ^ para subir al nivel inmediato superior en la expresión, por ejemplo:
div>ul>li^div>h1

- Sintaxis Emmet

```html
div+div>h1{MyH1}^div>h2{MyH2}
```

- Sintaxis en HTML

```html
<div></div>
<div>
    <h1>MyH1</h1>
</div>
<div>
    <h2>MyH2</h2>
</div>
```
