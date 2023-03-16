# Seletores

Conecta um elemento HTML com o CSS a fim de alterar

## Tipos

* Element selector
    - Todos os elementos HTML

```html
<h1>Título da página</h1>
<p>Conteúdo da minha página</p>
```
```css
h1 {
	color: blue;
	font-size: 60px;
}

p {
	color: green;
}
```

* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.

```html
<h1 id="title">Título da página</h1>
<p id="content">Conteúdo da minha página</p>
```

```css
#title {
  color: yellow;
}

#content {
	color: orange;
}
```

* Class Selector
    - Os elementos que contenham um atributo `class`.
    - Podemos ter uma ou mais classes.

```html
<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>
```

```css
.red {
color: red;
}

.big {
	font-size: 3em;
}
```

* Atribute selector
    - Um elemento que tenha um atributo específico.

```html
<h1 title="Algum titlulo">Título da página</h1>
<p title="Conteúdo da página">Conteúdo da minha página</p>
```

```css
[title] {
	color: orange;
}
```
* Pseudo-class selector
    - Elementos em um estado específico.

```html
<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>
```
```css
p:hover {
	color: red;
}

h1:hover {
	color: red;
}
```

* Múltiplos

    - É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todos eles.

    - Usamos uma separação por vírgulas para isso:

```css
h1, p, .title, .title:hover {
	color: red;
}
```