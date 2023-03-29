# Propriedade para os itens

## flex-basis

```css
.box {
    display: flex;

    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    
}

.box div:nth-child(1){
    flex-basis: 25px;
}
```

## flex-grow

```css
.box {
    display: flex;
    flex-direction: column;

    height: 150px;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-grow: 1; 
}

.box div:nth-child(1) {
    flex-grow: 3;
}
```

## flex-shrink

```css
.box {
    display: flex;
    flex-direction: column;
    border: 1px dashed red;
    height: 180px;
}

.box div {
    flex-basis: 80px;
    border: 1px solid;
    
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-shrink: 4;
}
```

## flex

```css
.box {
    display: flex;

    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    flex: 1 0 40px;
}

```

## order

```css
.box {
    display: flex;

    border: 1px dashed red;
}

.box div {
    border: 1px solid;
    
}

.box div:nth-child(1){
    order: 1;
}

.box div:nth-child(2){
    order: 20;
}

.box div:nth-child(3){
    order: 0;
}
```

*
 Alterando o tamanho de multiplos itens

 ```html
 <div class="page">
    <aside> Aside</aside>
    <main>
        Main
        <section>Content 1</section>
        <section>Content 2</section>
        <section>Content 3</section>
    </main>
 </div>
 ```

 ```css
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.page {
    border: 2px solid;
    min-height: 100vh;
    display: flex;
}

aside{
    background: lightgreen;
    flex: 1;
}

main {
    background: lightblue;
    flex: 2;

    display: flex;
    flex-direction: column;
}

main section:nth-child(1){
    background: lightgoldenrodyellow;
    flex: 0 0 100px;
}

main section:nth-child(2){
    background: lightsalmon;
    flex: 1;
}

main section:nth-child(3){
    background: lightpink;
    flex: 1;
}
 ```
*

