💻 Preview it live on [Code Sandbox](https://codesandbox.io/p/github/MichaelLF107/atom-shop/main?layout=%257B%2522activeFilepath%2522%253A%2522%252FREADME.md%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522fullScreenDevtools%2522%253Afalse%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522vertical%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522DEVTOOLS_PANELS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clh48hrzy01jb3b6m4lkcqcmg%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clh48hrzy01jb3b6m4lkcqcmg%2522%253A%257B%2522id%2522%253A%2522clh48hrzy01jb3b6m4lkcqcmg%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clh48hvdr01tm3b6mbl1qlfc2%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clh48hvdr01tm3b6mbl1qlfc2%2522%257D%257D%252C%2522showSidebar%2522%253Atrue%252C%2522showDevtools%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A10%252C%2522editorPanelSize%2522%253A23.196562240088724%252C%2522devtoolsPanelSize%2522%253A65.02861801504162%257D)

## Atom Shop

This project is a simple example of an E-commerce platform. The project was built using Next.js, Prisma and Typescript.

## Requirements

- Latest version of Node.js
- NPM or Yarn package manager
- Prisma CLI

## Installation

1. Clone the repository
```bash
git clone https://github.com/MichaelLF107/atom-shop.git
```

2. Install project dependencies
```bash
npm install
#or
yarn
```

3. Create the .env file and place the url of your database on DATABASE_URL

4. Run database migrations
```bash
npx prisma migrate dev
```

### Usage

1. Start the development server
```bash
npm run dev
#or
yarn dev
```

2. Open `http://localhost:3000` on your browser
