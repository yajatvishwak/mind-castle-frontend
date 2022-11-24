<script>
  import axios from "axios";
  import moment, { months } from "moment";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import Footer from "./components/Footer.svelte";
  import HeatMap from "./components/HeatMap.svelte";
  import JourneyCard from "./components/JourneyCard.svelte";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  let data = {
    mood: [
      {
        date: moment("01/01/2000", "DD/MM/YYYY"),
        mood: "sad",
        sentimentScore: 0.2,
      },
      {
        date: moment("02/01/2000", "DD/MM/YYYY"),
        mood: "happy",
        sentimentScore: 0.2,
      },
      {
        date: moment("04/01/2000", "DD/MM/YYYY"),
        mood: "sad",
        sentimentScore: 0.2,
      },
      {
        date: moment("02/02/2000", "DD/MM/YYYY"),
        mood: "happy",
        sentimentScore: 0.2,
      },
      {
        date: moment("04/02/2000", "DD/MM/YYYY"),
        mood: "sad",
        sentimentScore: 0.2,
      },
      {
        date: moment("04/05/2000", "DD/MM/YYYY"),
        mood: "sad",
        sentimentScore: 0.2,
      },
    ],
    moodboarddata: {},
  };
  onMount(() => {
    for (const mood of data.mood) {
      data["moodboarddata"][moment(mood.date).format("MMMM")] =
        data["moodboarddata"][moment(mood.date).format("MMMM")] || {};
      data["moodboarddata"][moment(mood.date).format("MMMM")][
        moment(mood.date).date()
      ] = mood.mood;
    }
    console.log(data.moodboarddata);
  });
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg"
>
  <Navbar />
  <div class="text-2xl mt-8">Monthly Mood Board</div>
  <div class="opacity-70">Track how you've been doing over the months</div>
  <div class="mt-5 flex flex-col gap-10 last:mb-20">
    {#each Object.keys(data["moodboarddata"]) as month}
      <HeatMap mood={data["moodboarddata"][month]} {month} />
    {/each}
  </div>
</section>
<Footer />
