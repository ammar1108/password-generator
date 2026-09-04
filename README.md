# Password Generator

A modern and responsive Password Generator built with React.js and Tailwind CSS.

This project generates random passwords based on user-selected options such as password length, numbers, and special characters. It also includes a one-click copy feature and a clean neumorphic user interface.

## Features

- Generate random passwords instantly
- Adjustable password length
- Toggle numbers on/off
- Toggle special characters on/off
- One-click copy to clipboard
- Neumorphic UI design
- Responsive layout
- Automatic password regeneration when options change
- Interactive password-length slider

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- React Hooks
  - useState
  - useEffect
  - useCallback
  - useRef

## React Concepts Practiced

This project helped me practice several important React concepts.

### useState

Used for managing:

- Password length
- Number selection
- Special character selection
- Generated password

### useCallback

Used for the password generation and clipboard functions.

### useEffect

Used to automatically generate a new password whenever the selected options change.

### useRef

Used to access the password input when copying the generated password.

## Project Structure

```text
password-generator/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
