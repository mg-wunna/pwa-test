# Todo PWA

A simple Progressive Web App (PWA) for managing todos. This app works offline and can be installed on mobile devices.

## Features

- Add, complete, and delete todos
- Works offline
- Installable on mobile devices
- Persistent storage using localStorage
- Modern and responsive design

## Setup

1. Clone this repository
2. Add your app icons in the `icons` directory:
   - `icon-192x192.png` (192x192 pixels)
   - `icon-512x512.png` (512x512 pixels)
3. Deploy to GitHub Pages:
   - Go to your repository settings
   - Under "GitHub Pages", select your main branch as the source
   - Save the settings

## Development

To run locally:

1. Use a local server (e.g., using Python):

   ```bash
   python -m http.server 8000
   ```

   or using Node.js:

   ```bash
   npx serve
   ```

2. Open your browser and navigate to `http://localhost:8000` (or the port shown in your terminal)

## GitHub Pages Deployment

To deploy on GitHub Pages:

1. Update the `start_url` in `manifest.json` to match your GitHub Pages URL:

   ```json
   {
   	"start_url": "/your-repo-name/"
   }
   ```

2. Update the cache paths in `service-worker.js` to include your repository name:

   ```javascript
   const ASSETS_TO_CACHE = [
   	'/your-repo-name/',
   	'/your-repo-name/index.html',
   	// ... other assets
   ];
   ```

3. Push your changes to GitHub and enable GitHub Pages in your repository settings.

## Testing PWA Installation

1. Open the deployed site in Chrome or any other modern browser
2. You should see an install button in the address bar (mobile) or three-dot menu (desktop)
3. Click the install button to add the app to your device

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Service Workers
- Web App Manifest
