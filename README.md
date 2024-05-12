# UzBnB Frontend

Welcome to our UzBnB Frontend! This project is built using Next.js, a React framework that enables server-side rendering and other powerful features for React applications.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:** 
   ```bash
   git clone https://github.com/uzbnb/frontend
   ```

2. **Install dependencies:** 
   ```bash
   cd frontend
   npm install
   ```

3. **Create a .env file:**
   Create a `.env` file in the root directory of the project. You can use the `env.example` file as a template. This file should contain environment variables needed for your project, such as API keys or configuration variables.

4. **Start the development server:** 
   ```bash
   npm run dev
   ```

   This command will start the Next.js development server. You can view the app by navigating to `http://localhost:3000` in your browser.

## Environment Variables

This project uses environment variables to configure certain aspects. Here's a list of environment variables used in this project:

- `API_URL`: The URL of the backend API. Make sure to set this variable to the appropriate value for your environment.

## Proxy for Backend

This project includes a proxy setup to simplify communication with the backend API during development. The proxy configuration can be found in the `next.config.js` file. Update the `proxy` property with the URL of your backend API.

## Deployment

To deploy this project, you can use various methods supported by Next.js, such as Vercel, Netlify, or manual deployment to your server. Make sure to set up environment variables appropriately for your deployment environment.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

