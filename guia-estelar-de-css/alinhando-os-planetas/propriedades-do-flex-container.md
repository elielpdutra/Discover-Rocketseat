# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento 
    * Principal 
    * Cruzado
* Espaços entre os itens

## Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row | row-reverse | column | column-reverse)

```html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

```css
.container{
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
}
```

## flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container

```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

```css
.box{
    display: flex;
    flex-wrap: wrap-reverse;

    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    width: 80px;
}
```

## flex-flow

- Shorthand
- flex-direction || flex-wrap

```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

```css
.box{
    display: flex;
    flex-flow: column wrap;

    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    width: 80px;
}
```

## justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

### valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly


```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

```css
.box{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 150px;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}
```

## align-items

- Alinhamento dos elementos no eixo cruzado


### valores

- stretch
- flex-start
- flex-end
- center


```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

```css
.box{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    height: 150px;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}
```

## gap 

- Espaços entre os elementos

### valores

Unidades de medidas
fixas: px, pt
flexíveis: %, em. rem

```html
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

```css
.box{
    display: flex;
    gap: 2px;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}
```