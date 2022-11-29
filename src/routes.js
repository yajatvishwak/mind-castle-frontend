import Signup from "./lib/Signup.svelte";
import Personality from "./lib/Personality.svelte";
import Signin from "./lib/Signin.svelte";
import Home from "./lib/Home.svelte";
import Journey from "./lib/Journey.svelte";
import Add from "./lib/Add.svelte";
import Edit from "./lib/Edit.svelte";
import Profile from "./lib/Profile.svelte";
import MyPersonality from "./lib/MyPersonality.svelte";
import Troops from "./lib/Troops.svelte";
import Chat from "./lib/Chat.svelte";
import ReadJourney from "./lib/ReadJourney.svelte";
import MonthlyMoodBoard from "./lib/MonthlyMoodBoard.svelte";
import Eventlog from "./lib/Eventlog.svelte";
const routes = {
  "/signin": Signin,
  "/signup": Signup,
  "/event-logs": Eventlog,
  "/personality": Personality,
  "/home": Home,
  "/monthly-mood": MonthlyMoodBoard,
  "/read-journey": ReadJourney,
  "/troop/chat/:id": Chat,
  "/journey/:journeyid": Journey,
  "/add": Add,
  "/edit/:journeyid": Edit,
  "/profile": Profile,
  "/mypersonality/:id": MyPersonality,
  "/troops": Troops,
};
export default routes;
