angular structure
src
┣ app
┃ ┣ config
┃ ┃ ┗ endpoints
┃ ┃ ┃ ┗ endpoints1.ts
┃ ┃ ┃ ┗ endpoints2.ts
┃ ┃ ┃ ┗ endpoints3.ts
┃ ┣ core
┃ ┃ ┣ authentication
┃ ┃ ┃ ┣ login
┃ ┃ ┃ ┃ ┣ login.component.html
┃ ┃ ┃ ┃ ┣ login.component.scss
┃ ┃ ┃ ┃ ┣ login.component.spec.ts
┃ ┃ ┃ ┃ ┗ login.component.ts
┃ ┃ ┃ ┣ utils
┃ ┃ ┃ ┃ ┗ captcha.ts
┃ ┃ ┃ ┣ authentication.component.scss
┃ ┃ ┃ ┣ authentication.component.ts
┃ ┃ ┃ ┗ authentication.service.ts
┃ ┃ ┣ guards
┃ ┃ ┃ ┗ common.guard.ts
┃ ┃ ┗ core.module.ts
┃ ┣ models
┃ ┃ ┗ model1.ts
┃ ┃ ┗ model2.ts
┃ ┃ ┗ model3.ts
┃ ┣ modules
┃ ┃ ┣ module1
┃ ┃ ┃ ┣ components/containers
┃ ┃ ┃ ┃ ┣ component1
┃ ┃ ┃ ┃ ┃ ┗ component1.component.html
┃ ┃ ┃ ┃ ┃ ┗ component1.component.scss
┃ ┃ ┃ ┃ ┃ ┗ component1.component.spec.ts
┃ ┃ ┃ ┃ ┃ ┗ component1.component.ts
┃ ┃ ┃ ┃ ┣ component2
┃ ┃ ┃ ┃ ┣ component3
┃ ┃ ┃ ┣ shared
┃ ┃ ┃ ┃ ┣ services
┃ ┃ ┃ ┃ ┣ directives
┃ ┃ ┃ ┃ ┣ pipes
┃ ┃ ┃ ┃ ┣ utils
┃ ┃ ┃ ┗ module1-routing.module.ts
┃ ┃ ┃ ┗ module1.component.html
┃ ┃ ┃ ┗ module1.component.scss
┃ ┃ ┃ ┗ module1.component.spec.ts
┃ ┃ ┃ ┗ module1.component.ts
┃ ┃ ┃ ┗ module1.module.ts
┃ ┃ ┣ shared
┃ ┃ ┃ ┣ components
┃ ┃ ┃ ┣ services
┃ ┃ ┃ ┃ ┗ common.service.ts
┃ ┃ ┃ ┃ ┗ config.service.ts
┃ ┃ ┃ ┃ ┗ user.service.ts
┃ ┃ ┃ ┣ directives
┃ ┃ ┃ ┣ pipes
┃ ┃ ┃ ┣ utils
┃ ┃ ┗ shared.module.ts
┃ ┣ app-routing.module.ts
┃ ┣ app.component.html
┃ ┣ app.component.scss
┃ ┣ app.component.spec.ts
┃ ┣ app.component.ts
┃ ┣ app.module.ts
┣ assets
┃ ┣ i18n
┃ ┣ img
┃ ┣ settings
┃ ┣ styles
┃ ┣ themes
┣ environments
┣ index.html
┣ main.ts
┣ styles.scss
┗ test.ts

scss structure
styles/
|
|– abstracts/ (or utilities/)
| |– \_variables.scss // Sass Variables
| |– \_functions.scss // Sass Functions
| |– \_mixins.scss // Sass Mixins
|
|– base/
| |– \_reset.scss // Reset/normalize
| |– \_typography.scss // Typography rules
|
|– components/ (or modules/)
| |– \_buttons.scss // Buttons
| |– \_carousel.scss // Carousel
| |– \_slider.scss // Slider
|
|– layout/
| |– \_navigation.scss // Navigation
| |– \_grid.scss // Grid system
| |– \_header.scss // Header
| |– \_footer.scss // Footer
| |– \_sidebar.scss // Sidebar
| |– \_forms.scss // Forms
|
|– pages/
| |– \_home.scss // Home specific styles
| |– \_about.scss // About specific styles
| |– \_contact.scss // Contact specific styles
|
|– themes/
| |– \_theme.scss // Default theme
| |– \_admin.scss // Admin theme
|
`– main.scss // Main Sass file
