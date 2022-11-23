import Signup from "./lib/Signup.svelte";
import Personality from "./lib/Personality.svelte";
import Signin from "./lib/Signin.svelte";
import Home from "./lib/Home.svelte";
import Journey from "./lib/Journey.svelte";
import Add from "./lib/Add.svelte";
import Edit from "./lib/Edit.svelte";
import Chat from "./lib/Chat.svelte";
import ReadJourney from "./lib/ReadJourney.svelte";
const routes = {
  "/signin": Signin,
  "/signup": Signup,
  "/personality": Personality,
  "/home": Home,
  "/read-journey": ReadJourney,
  "/troop/chat/:id": Chat,
  "/journey/:journeyid": Journey,
  "/add": Add,
  "/edit/:journeyid": Edit,
};
export default routes;
