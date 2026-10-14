
import App from "./App.svelte";

const target = document.getElementById("app");
if (!target) {
  throw new Error("Application root element was not found");
}

const app = new App({
  target,
});

window.app = app;

export default app;
