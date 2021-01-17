import '../styles/main.css'
// import 'alpinejs' // for some reason importing this here doesn't seem to work.
// Using the 11ty config to copy into the folder. But it means it's not minified.

// DEV_MODE gets replaced at build time based on ENV!
if (DEV_MODE) {
  console.log('Dev mode is currently enabled.')
}
