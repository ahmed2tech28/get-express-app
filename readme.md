# get-express-app 🚀

A CLI tool to quickly generate an Express.js app with different configurations like API mode, EJS views, and more.

## Installation

You can install it globally using npm:

```sh
npm install -g get-express-app
```

Or use it directly with `npx` (no installation required):

```sh
npx get-express-app my-app
```

## Usage

### Create an Express API (No Views)

```sh
npx get-express-app my-api --api
```

This will generate an Express app configured as an API (without a templating engine).

### Create an Express App with EJS Views

```sh
npx get-express-app my-webapp --ejs
```

This will generate an Express app with **EJS** as the templating engine.

## Running the Generated App

After creating the project, navigate into the directory and start the server:

```sh
cd my-app
npm start
```

## Folder Structure

Each generated project follows this structure:

```
my-app/
├── node_modules/
├── public/
│   ├── css/
│   ├── js/
├── views/  (Only for EJS template)
├── routes/
│   ├── index.js
│   ├── api.js (Only for API template)
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Development

If you want to modify and test this CLI tool locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/get-express-app.git
   cd get-express-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Link it globally:
   ```sh
   npm link
   ```
4. Now, test it by running:
   ```sh
   get-express-app test-app --api
   ```

## Contributing

Contributions are welcome! If you have ideas, open an issue or submit a PR.

## License

This project is licensed under the **MIT License**.
