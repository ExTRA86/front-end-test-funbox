Level I

Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

• пользователя

Верстка, в которой понятный и приятный интерфейс, а также простой и удобный поиск необходимой информации.

• менеджера проекта

Верстка выполненная правильно и в срок.

• дизайнера

Верстка, максимально соответствующая макету.

• верстальщика

Верстка, которая легко масштабируется и изменяется.

• клиентского программиста

Верстка, в которой правильно прописаны классы и id, с которыми дальше будет легко работать.

• серверного программиста

Важна производительность и оптимизация кода

Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Нужен единый стиль для станиц и реализовать модульную верстку, т.е. стили блоков не должны зависеть друг от друга. Для этого хорошо подойдет методология БЭМ, также SCSS, CSS-modules, Styled-Components.

Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Верстка должна быть адаптивная и кроссбраузерная. Для этого нужно продумать верстку, использовать префиксы, flex-box, медиа-запросы. Можно использовать фреймворки, например Bootstrap. Для проверки отображения можно использовать Google Chrome devtools, Caniuse, https://browsershots.org/

Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

IDE VS Code, плагины Emmet, Bracket Pair Colorizer, React snippets, ESLint, Prettier, горячие клавиши, Google Chrome devtools и React developer tools.

Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Нужно посмотреть в chrome devtools не использовались ли в верстке элементы или стили, которые не поддерживает данный браузер или устройство. Проверить это можно на сайте caniuse.

Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Сначала уточню у дизайнера, если такой возможности нет, то в зависимости от дизайна поставил бы какой-нибудь эффект при наведении, т.е. можно поменять цвет, изменить оттенок, сделать рамку у элемента, увеличить элемент или изменить видимость при наведении.

Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Беру информацию из документации и роликов на YouTube, также использую сайты learnjavascript.ru, stackoverflow, хабр, Google.
Мне нравится frontend разработка на js, в меньшей степени верстка.
Нравится разбираться в том, как устроены механизмы и как они работают. Ещё нравиться космология, антропология, энвироника

Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Начал работать frontend разработчиком в 2021 году.
Проходил курсы:
Полный курс по JavaScript + React - с нуля до результата (Иван Петриченко)
React JS. Практический Курс 2020 (вкл. Хуки, Классы, Redux) (Владилен Минин)

Всегда открыт к изучению новых технологий/фреймворков/библиотек. Обладаю большим терпением, позитивным взглядом на жизнь, быстро обучаюсь.

Код из коммерческих проектов показать не могу, но можно посмотреть мой профиль на github https://github.com/ExTRA86

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
