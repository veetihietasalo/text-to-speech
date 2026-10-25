# text-to-speech

Try it in the browser: https://veetihietasalo.github.io/text-to-speech/
It's the web build of the mobile app, so the layout is made for a phone screen. In the browser `expo-speech` uses the Web Speech API, so the voices depend on the browser and OS, and a browser with no voices stays silent.

An Expo (React Native) exercise: type text into the field, tap Puhu teksti ("speak text") and the phone reads it aloud with `expo-speech` in the device's default voice. The UI text is in Finnish.

Stack: Expo SDK 49, React Native 0.72, `expo-speech`.

Run:

```bash
npm install
npm start
```

Then open it in Expo Go, or use `npm run android` / `npm run ios`. The Expo Go app in the stores only runs the newest SDK, so on a phone it needs an upgrade from SDK 49 first.

Web build:

```bash
npm run build:web
npm run deploy:web
```

`build:web` runs `expo export --platform web` (Metro) into `dist/`, then `scripts/web-relative-paths.js` makes the paths relative. GitHub Pages serves the app from `/text-to-speech/` and Expo SDK 49 has no base URL setting. `deploy:web` builds and pushes `dist/` to the `gh-pages` branch.

Status: applied university assignment, October 2023 (two commits, 11 Oct 2023).
