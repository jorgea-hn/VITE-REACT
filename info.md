**Como crear un proyecto en react con vite**
* npm create vite@latest My-app --template react
* cd My-app
* npm install
* npm run dev


* npm install react-router-dom localforage match-sorter sort-by
* npm run build 
* npm run preview


**Para subirlo ir a la documentacion de vite**


**Documentacion de react actualizada**
https://react.dev/learn/start-a-new-react-project

**Documentacion de react-route**
https://reactrouter.com/en/main/start/tutorial


**Hacer deploy**

Se instala git pages
* npm install --save gh-pages

Se agregan el predeploy y el deploy en script del package.json
* "predeploy": "npm run build",
  "deploy":"gh-pages -d dist",