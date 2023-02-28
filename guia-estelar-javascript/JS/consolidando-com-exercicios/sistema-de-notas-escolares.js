/*
    Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - F

*/ 

function getScore(score){
    if(score >= 90) {
        console.log(score = 'A');
    
    }else if(score >= 80){
        console.log(score = 'B')
    
    }else if(score >= 70)  {
        console.log(score = 'C')
    
    }else if(score >= 60){
        console.log(score = 'D')
    
    }else if (score >= 0) {
        console.log(score = 'F')
    } else {
        console.log('Nota inválida!')
    }
}

getScore(100);
getScore(80);
getScore(70);
getScore(60);
getScore(50);

