### 1.0.0
- Switch from CSS modules to styled-components
- Remove all CSS-related plugins and configs due to migration to styled-components (mini-css, postcss, babel plugins, browserlist, etc.)
- Fix auto-reloading: pass a manifest.json path to the ExtensionReloader
- Clear out unused dependencies

### 0.0.2
- Added auto reloading with [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader)
- Fix: content.js tries to load background.css instead of content.css
