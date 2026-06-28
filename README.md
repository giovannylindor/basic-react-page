# Basic React Page
 
A beginner mini-project for learning the fundamentals of React components, using React, TypeScript, and Vite

 
## Getting Started
 
**1. Clone the repo**
```bash
git clone https://github.com/giovannylindor/basic-react-page.git
cd basic-react-page
```
 
**2. Install dependencies**
```bash
npm install
```
 
**3. Start the dev server**
```bash
npm run dev
```
 
**4. Open in your browser**
 
Vite will print a local URL in the terminal — typically:
```
http://localhost:5173
```
 
## Project Structure
 
```
basic-react-page/
├── index.html               # App entry point (Vite root)
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navbar with title and nav buttons
│   │   ├── Header.css
│   │   ├── Card.tsx         # Centered login form card
│   │   └── Card.css
│   ├── App.tsx              # Root component — composes Header + Card
│   ├── App.css
│   ├── main.tsx             # Mounts App into the DOM
│   └── index.css
├── vite.config.ts
└── package.json
```
