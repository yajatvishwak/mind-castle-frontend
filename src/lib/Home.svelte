<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import { push } from "svelte-spa-router";
  import Footer from "./components/Footer.svelte";
  import JourneyCard from "./components/JourneyCard.svelte";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";

  let isSearchModalOpen = false;
  let userpersonality = "";
  let isReadJourney = true;
  let searchdata = [];
  let feeling = "";
  onMount(async () => {
    const res = await axios.post($baseurl + "home", {
      username: localStorage.getItem("username"),
    });
    if (res && res.data) {
      data = res.data;
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  });
  let data = {
    name: "Yojat",
    journey: [
      {
        _id: 1,
        title: "Andrew Tateism",
        personality: "INTP",
        author: "Andrew Gate",
      },
    ],
  };
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg"
>
  <Navbar />
  <div class="text-2xl mt-8">Welcome, {data.name}</div>
  <div class="opacity-70">Check out curated journey for you</div>
  <div class="mt-5 flex flex-col gap-3 last:mb-20">
    <JourneyCard
      comments={"32"}
      dp="asd"
      jid="123"
      likes="3"
      timeago="52 d ago"
      title="can i get a hawwye"
      username="dannyboi"
    />
  </div>
</section>
<Footer />
