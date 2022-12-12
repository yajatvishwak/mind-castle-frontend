<script>
  import Loading from "./components/Loading.svelte";

  import axios from "axios";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import { push } from "svelte-spa-router";
  import { getLoadingMessage } from "../loadingMessage";
  import Footer from "./components/Footer.svelte";
  import JourneyCard from "./components/JourneyCard.svelte";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  onMount(async () => {
    await fetchData();
  });
  let data = [
    {
      _id: "63819e63d98cc5fcdc0cd5ca",
      title: "Flowers is my new hobby",
      comments: 0,
      likes: 0,
      match: 47.861212491989136,
      personality: "ENTP",
      timeago: "15 minutes ago",
    },
  ];
  function debounce(callback, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        callback.apply(this, args);
      }, wait);
    };
  }
  let search = "";
  let journeyloading = false;
  async function fetchData() {
    journeyloading = true;
    const res = await axios.post($baseurl + "journey/get-journey/read", {
      token: localStorage.getItem("token"),
      search: search,
    });
    if (res && res.data) {
      data = res.data.data;
      console.log(data);
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
    journeyloading = false;
  }
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg"
>
  <Navbar />
  <div class="text-xl mt-8">What would you like to read?</div>
  <div class="opacity-70 text-sm">
    Start typing and we promise we'll get you relatable journeys
  </div>
  <div>
    <textarea
      type="text"
      class=" textarea-bordered textarea w-full mt-3"
      placeholder="Start typing here..."
      name=""
      id=""
      rows="5"
      bind:value={search}
    />
    <button on:click={fetchData} class="btn w-full">Search</button>
  </div>
  <div class="mt-5 flex flex-col gap-3 last:mb-20">
    {#if journeyloading}
      <Loading />
    {:else}
      {#each data as journey}
        <JourneyCard
          comments={journey.comments + ""}
          dp={journey.dp}
          jid={journey._id}
          likes={journey.likes + ""}
          timeago={journey.timeago}
          title={journey.title}
          username={journey.author}
          match={journey.match}
          personality={journey.personality}
          userpersonality={localStorage.getItem("personality") || ""}
        />
      {/each}
    {/if}
  </div>
</section>
<Footer />
