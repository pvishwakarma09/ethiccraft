# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. **Create the dist folder**:
   - Run the build command for your project, which will generate the `dist` folder (usually in React, you can use `npm run build`).

2. **Update the `.gitignore` file**:
   - Open your `.gitignore` file and remove any reference to the `dist` folder so that it is not ignored.
     ```bash
     # Remove this line if it exists
     dist/
     
3. **Push the changes to GitHub**:
   - Add the changes to your git repository:
     ```bash
     git add .
     git commit -m "Remove dist folder from .gitignore and push dist folder"
     git push

4. **Deployment**:
   - Ensure that only the `dist` folder is deployed to your production environment. You can configure your deployment script or platform (e.g., Netlify, Vercel) to deploy the `dist` folder specifically.

This will allow you to manage your dist folder in your GitHub repository and use it for deployment.
