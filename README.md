# webpack-react-pro

## Установка

### 0. `npm i -g webpack webpack-cli`

### 1. `npm i`

## Последовательность настройки

### 1. `npm init -y`

### 2. `npm i -D webpack webpack-cli`

### 3. webpack.config.js

### 4. `npm i -g webpack webpack-cli`

### 5. `npm i -D html-webpack-plugin`

(создает в папке `build` html файл по образцу html файла из папки `src`)

### 6. `npm i -D css-loader`

### 7. `npm i -D style-loader`

(стили в теге `head`)

### 8. `npm i -D mini-css-extract-plugin`

(стили в отдельном файле)

### 9. `npm i -D optimize-css-assets-webpack-plugin`

### 10. `npm i -D uglifyjs-webpack-plugin`

(потому что в 9 пункте в файл `webpack.config.js` ввели объект optimization и сборка в продакшене теперь не минифицирует js)

### 11. `npm i -D webpack-dev-server`