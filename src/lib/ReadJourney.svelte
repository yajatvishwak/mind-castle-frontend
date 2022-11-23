<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import { push } from "svelte-spa-router";
  import { getLoadingMessage } from "../loadingMessage";
  import Footer from "./components/Footer.svelte";
  import JourneyCard from "./components/JourneyCard.svelte";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";

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
  let journeyloading = false;
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
    />
  </div>
  <div class="mt-5 flex flex-col gap-3 last:mb-20">
    {#if journeyloading}
      <div class="flex justify-center items-center flex-col gap-3 h-full">
        <svg
          class="animate-spin  h-7 w-7 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <div class="text-xs  text-center">{getLoadingMessage()}</div>
      </div>
    {:else}
      <JourneyCard />
      <JourneyCard />
      <JourneyCard />
      <JourneyCard />
      <JourneyCard />
      <JourneyCard />
      <JourneyCard />
    {/if}
  </div>
</section>
<Footer />
