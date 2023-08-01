# Tab Completion

O Tab Completion pode ser usado tanto nos comandos quanto nos argumentos, ele é básicamente uma ferramenta de busca de comandos, ativada a partir da tecla Tab, no caso dos argumentos, ele vai listar todas as pastas, arquivos e diretórios disponíveis no caminho.

## Atalhos

Nesta aula, serão retratados alguns atalhos que você pode usar para o seu terminal Hyper, atenção, pois dependendo do terminal, e do ambiente (Windows, Mac, Linux), ele pode funcionar diferentemente.

Um dos atalhos são as setinhas do seu teclado, sendo;
```
Up - Down: vê seus comandos anteriores
Ctrl + setas: pula as palavras (Mac option + setas)
```
E também o Ctrl;
```
Ctrl + A: vai para o início da linha
Ctrl + E: vai para o final da linha
Ctrl + U: limpa a linha
Ctrl + K: apaga tudo na linha até onde o cursor está posicionado
Ctrl + L: clear, limpa o terminal (CMD + K para Mac)
```

## Hyper

Tutorial de como ter um terminal boladão. Primeiramente, faça o dowload do hyper através do link https://hyper.is e complete a instalação. Em seguida acesse a página a seguir e siga as instruções: https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/

## Conseguindo ajuda

Você não precisa memorizar tudos os comandos, mas é importante saber inglês, pois vamos aprender a usar o manual dos comandos, que é utilizado o prefixo man e um comando de sua escolha, por exemplo:
```
man ls
```
Onde obteremos uma descrição de o que o comando ls faz, e ao apertar h receberemos uma lista de atalhos para utilizar na página de ajuda, sendo os mais úteis; z e w, onde se troca de página, e setas pra cima e pra baixo pra navegar, além do Q para sair da ajuda, e novamente o Q para sair do manual ou do apropos, o comando a seguir.

O apropos é de grande ajuda, pois nele é onde se busca um comando a partir de algo que ele faça, com a seguinte sintaxe:
```
apropos "list"
```
Ele vai buscar comandos que tenham em sua descrição list e mostrá-los ao usuário numa página como a do manual.