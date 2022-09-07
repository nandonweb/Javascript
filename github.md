#Git

##Commit
0. Abrir Terminal
1. Entrar na pasta EX: C:/github/projeto1
2. git status
3. git init 
4. git add .  /lista toda a pasta
5. git commit nomes.js -m "Comentario Commit 1 arquivo"
6. git status
7. git commit -m "Comentario para todos os arquivos"
8. git status

##Push - Enviar
1. git branch -m main
2. git remote add origin https://github.com/nandonweb/nomedorepo.git
3. git push -u origin main
4. git status
5. git push

##Pull - Receber alterações
1. git pull

##Clone - clonar repositorio 
1. criar pasta  EX: clone1
2. abrir terminal dentro dela
3. git clone https://github.com/nandonweb/projeto1.git .

##Log
1. git log
2. sair - aperta q

##Checkout - reverter arquivo
1 - git checkout index.html

##Reset - Resetar arquivos 
1. git reset --hard origin/main