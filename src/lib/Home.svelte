<script>
  // @ts-nocheck

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
  let loading = false;
  onMount(async () => {
    await fetchData();
  });
  async function fetchData() {
    loading = true;
    const res = await axios.post($baseurl + "journey/get-journey/home", {
      token: localStorage.getItem("token"),
    });
    if (res && res.data) {
      data.name = res.data.data.name;
      data.journey = res.data.data.journey;
      console.log(res.data.data);
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
    loading = false;
  }
  let data = {
    name: localStorage.getItem("username"),
    journey: [
      {
        _id: "1",
        title: "Andrew Tateism",
        personality: "INTP",
        author: "Andrew Gate",
        comments: "12",
        likes: "12",
        dp: "",
        timeago: "2 days ago",
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
    {#each data.journey as journey}
      <JourneyCard
        comments={journey.comments}
        dp={journey.author}
        jid={journey._id}
        likes={journey.likes}
        timeago={journey.timeago}
        title={journey.title}
        username={journey.author}
      />
    {/each}
  </div>
</section>
<Footer />
