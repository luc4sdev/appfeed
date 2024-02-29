
---

## 💻 About

The project's objective is to implement a feed screen with data from the Giphy API, returning the top trending gifs. It is also possible to view a table of emojis returned from the API. The application was developed using ReactJS and NextJS using the Kendo UI library. Unit tests were also performed with Jest and React Testing Library.

--- 

## 🚀 Project hosted on Vercel (click to access)

<h2>Link: <a href="https://appfeed.vercel.app/" target="_blank" rel="external">Access here</a></h2>


## 💻 Prerequisites

Before you begin, ensure you have met the following requirements:
* You have a `<Windows / Linux / Mac>` machine
* You have installed the latest version of `NodeJS`


## ⚙️ Installing

To install, run the following command in the terminal:

npm:
```
npm i
```

yarn:
```
yarn install
```


## 🚀 Running the project

1° - You must create a file named ```.env.local``` with the following environment variables:
```
NEXT_PUBLIC_API_BASE_URL="https://api.giphy.com"
NEXT_PUBLIC_API_KEY="API do Giphy"
NEXT_PUBLIC_KENDO_UI_LICENSE="Kendo UI license"
```

2° - Create the file ```kendo-ui-license.txt``` file in the project root with the license key and run the following command to activate the Kendo UI license:

npm:
```
npx kendo-ui-license activate
```

yarn:
 ```
yarn run kendo-ui-license activate
 ```


To run the project, execute the following command in the terminal:

npm:
```
npm run dev
```
yarn:
```
yarn dev
```

## 🧪 Running tests

1° - You must create a file named ```.env.test``` with the following environment variables:
```
NEXT_PUBLIC_API_BASE_URL="https://api.giphy.com"
NEXT_PUBLIC_API_KEY="API do Giphy"
NEXT_PUBLIC_KENDO_UI_LICENSE="Licença do Kendo UI"
```

To run tests, execute the following command in the terminal:

npm:
```
npm run test
```
yarn:
```
yarn test
```

## 🚀 Technologies used

The project is developed using the following technologies:

- ReactJS <img width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
- NextJS <img width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
- TailwindCSS <img width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
- Jest <img width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
- React Testing Library
- APIRest
- Kendo UI

--- 



