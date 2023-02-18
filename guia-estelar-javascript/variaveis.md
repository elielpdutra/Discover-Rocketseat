# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let 
    * const

```js
    // var
    var clima = "Quente";
    clima = 'Frio';
    console.log(clima);

    // let
    let clima1 = "quente";
    clima1 = 'frio';
    console.log(clima1);

    // const 
    const clima2 = 'quente';
    clima2 = 'frio';
    console.log(clima2);
```

## O JS é uma linguagem fracamente tipada e dinâmica 
    - Variáveis não precisam ter um tipo previamente definido 
    - Podemos mudar o conteúdo da variável

```js
    let clima = true; //boolean
    clima = ""; //string
    console.log(typeof clima);
```