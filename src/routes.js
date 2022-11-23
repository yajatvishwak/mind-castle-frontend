import Signup from "./lib/Signup.svelte";
import Personality from "./lib/Personality.svelte";
import Signin from "./lib/Signin.svelte";
import Home from "./lib/Home.svelte";
import Journey from "./lib/Journey.svelte";
import Add from "./lib/Add.svelte";
import Edit from "./lib/Edit.svelte";
import TherapistVerification from "./lib/TherapistVerification.svelte";
const routes = {
  "/signin": Signin,
  "/signup": Signup,
  "/therapist-verification": TherapistVerification,
  "/personality": Personality,
  "/home": Home,
  "/journey/:journeyid": Journey,
  "/add": Add,
  "/edit/:journeyid": Edit,
};
export default routes;
