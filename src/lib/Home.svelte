<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import { push } from "svelte-spa-router";
  import Footer from "./components/Footer.svelte";
  import JourneyCard from "./components/JourneyCard.svelte";
  import Navbar from "./Navbar.svelte";
  import SearchResult from "./SearchResult.svelte";
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
  async function sendFeeling() {
    if (feeling) {
      const res = await axios.post($baseurl + "find-journeys", {
        username: localStorage.getItem("username"),
        text: feeling,
      });
      console.log(res.data);
      searchdata = res.data.journeys.map((item) => {
        return {
          title: item.title,
          author: item.author,
          journeyid: item.journeyid,
          personality: item.personality,
        };
      });
      userpersonality = res.data.userpersonality;
      isSearchModalOpen = true;
    }
  }
</script>

<input type="checkbox" checked={isSearchModalOpen} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <SearchResult data={searchdata} {userpersonality} />
    <div class="modal-action">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => (isSearchModalOpen = false)}
        for="my-modal-6"
        class="btn"
      >
        Close
      </div>
    </div>
  </div>
</div>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg"
>
  <Navbar />
  <div class="text-2xl mt-8">Welcome, {data.name}</div>
  <div class="opacity-70">Check out curated journey for you</div>
  <div class="mt-5 flex flex-col gap-3 last:mb-20">
    <JourneyCard />
    <JourneyCard />
    <JourneyCard />
    <JourneyCard />
    <JourneyCard />
    <JourneyCard />
    <JourneyCard />
  </div>
</section>
<Footer />
