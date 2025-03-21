# Three.js 3D Model Viewer

This project is a 3D model viewer built using Three.js, allowing users to load and visualize `.obj` models with `.mtl` materials and textures. The application includes basic scene setup, lighting, controls, and model loading.

## Features
- Loads `.obj` models with `.mtl` materials
- Applies texture manually to each material
- Uses `OrbitControls` for interactive camera movement
- Supports window resizing

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/threejs-viewer.git
   cd threejs-viewer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application
To start the application, run:
```sh
npm run dev
```
This will start the development server, and the application should be accessible at `http://localhost:3000/`.

## Project Structure
```
threejs-viewer/
│-- public/
│   ├── models/       # 3D models (.obj, .mtl, textures)
│-- src/
│   ├── components/
│   │   ├── ThreeDViewer.jsx  # Main 3D Viewer Component
│   │   ├── modelViewer.js    # Utility for loading models
│-- pages/
│-- package.json
│-- README.md

```

## How to Use
1. Open the application in a browser.
2. The `.obj` model will load automatically.
3. Use the mouse to rotate, zoom, and pan the model.

## Deployment
To build the project for production:
```sh
npm run build
```
To start the production server:
```sh
npm start
```

## Evaluation Criteria
- **Application functionality**: Proper loading of 3D models with textures and materials.
- **Code organization and readability**: Well-structured and commented code.
- **Adherence to instructions**: Following setup and execution steps correctly.

## License
This project is licensed under the MIT License.

