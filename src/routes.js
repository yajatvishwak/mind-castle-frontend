import Signup from "./lib/Signup.svelte";
import Personality from "./lib/Personality.svelte";
import Signin from "./lib/Signin.svelte";
import Home from "./lib/Home.svelte";
import Journey from "./lib/Journey.svelte";
import Add from "./lib/Add.svelte";
import Edit from "./lib/Edit.svelte";
import TherapistVerification from "./lib/TherapistVerification.svelte";
import Profile from "./lib/Profile.svelte";
import MyPersonality from "./lib/MyPersonality.svelte";
import Troops from "./lib/Troops.svelte";
const routes = {
  "/signin": Signin,
  "/signup": Signup,
  "/therapist-verification": TherapistVerification,
  "/personality": Personality,
  "/home": Home,
  "/journey/:journeyid": Journey,
  "/add": Add,
  "/edit/:journeyid": Edit,
  "/profile": Profile,
  "/mypersonality": MyPersonality,
  "/troops" : Troops,
};
export default routes;
