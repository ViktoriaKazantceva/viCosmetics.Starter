# Редизайн сайта компании viCosmetics

Данный проект разработан на основе материалов сайта Новосибирской компании viCosmetics, специализирующейся на производстве натуральной косметики:
https://vi-c.ru/

Проект предназначен для некоммерческого использования. Изображения товаров и тексты принадлежат правообладателю.

Сверстана страница: «О компании», на которой присутствует видео от __cottonbro studio__: https://www.pexels.com/ru-RU/@cottonbro

Для проекта используется Gulp-сборка от __MaxGraph__: https://github.com/maxdenaro/gulp-maxgraph

## Начало работы

Находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
Вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку __app__ корневой директории): <br>

`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`gulp cache` - команда, которую стоит запускать после `gulp build`, если вам нужно загрузить новые файлы на хостинг без кэширования.

`gulp backend` - команда для бэкенд-сборки проекта. Она лишена ненужных вещей из dev-сборки, но не сжата, для удобства бэкендера.

`gulp zip` - команда собирает ваш готовый код в zip-архив.

## npm-скрипты

Вы можете вызывать gulp-скрипты через npm.
Также в сборке есть возможность проверять код на соответствие конфигу (editorconfig) и валидировать html.

`npm run html` - запускает валидатор html, запускать нужно при наличии html-файлов в папке __app__.

`npm run code` - запускает editorconfig-checker для проверки соответствия конфиг-файлу.

## Работа с HTML

Благодаря плагину __gulp-file-include__ вы можете разделять html-файл на различные шаблоны, которые должны храниться в папке __partials__.

> Для вставки html-частей в главный файл используйте `@include('partials/filename.html')`

## Работа с CSS

В сборке используется препроцессор __sass__ в синтаксисе __scss__.

В итоговой папке __app/css__ создаются два файла: <br> __main.css__ - для стилей страницы, <br> __vendor.css__ - для стилей всех библиотек, использующихся в проекте.

## Работа с JavaScript

Для сборки JS-кода используется webpack.
