<script>
  import Navbar from "./Navbar.svelte";
  import { push } from "svelte-spa-router";
  import axios from "axios";
  import { onMount } from "svelte";
  let data = {
    name: "Danny Ultra Boy",
    personality: "INTP",
    journeys: [
      {
        title: "Moving into a new city",
        id: "1",
        updated: "2021-05-01",
      },
      {
        title: "Handling mental health with physical",
        id: "2",
        updated: "2021-05-01",
      },
    ],
    liked: [
      {
        title: "I like this journey",
        id: "1",
        updated: "2021-05-01",
      },
      {
        title: "How to be a better person",
        id: "2",
        updated: "2021-05-01",
      },
    ],
  };

  onMount(async () => {
    fetchData();
  });

  async function fetchData() {
    const response = await axios.get("/api/profile", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    data = response.data.user;
  }
</script>

<section
  class="bg-slate-100 relative w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen mx-auto max-w-lg"
>
  <Navbar />

  <div class="text-center mt-12">
    <div class="avatar">
      <div
        class="w-32 rounded-full ring ring-offset-base-100 ring-offset-2 mb-4 ring-indigo-500"
      >
        <img src="https://placeimg.com/192/192/people" alt="" />
      </div>
    </div>
    <h3 class="text-2xl font-semibold leading-normal mb-2 text-blueGray-700">
      {data.name}
    </h3>
    <div class="text-sm leading-normal mt-0 mb-2  font-bold uppercase">
      <i class="fas fa-map-marker-alt mr-2 text-lg " />
      <div class="badge p-4 bg-indigo-500 border-none text-white">
        {data.personality}
      </div>
    </div>
  </div>

  <div class="mb-5 flex items-center justify-between mt-8">
    <h4 class="font-medium text-slate-500">Your Journeys</h4>
    <button
      on:click={() => {
        push("/add");
      }}
      class="rounded-md btn btn-xs btn-outline px-2 font-semibold text-gray-900"
    >
      +
    </button>
  </div>

  {#each data.journeys as journey}
    <div
      class="flex rounded-xl justify-between dark:bg-slate-800  bg-white p-5 shadow-sm my-2"
    >
      <div>
        <h4 class="font-semibold  text-lg">{journey.title}</h4>
        <p class="text-sm opacity-50 mt-1">Updated 2 days ago</p>
      </div>
      <div class="justify-center items-center flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  {/each}

  <div class="divider" />

  <h4 class="font-medium text-slate-500 mb-4">Liked Journeys</h4>

  {#each data.liked as like}
    <div
      class="flex rounded-xl justify-between dark:bg-slate-800  bg-white p-5 shadow-sm my-2"
    >
      <div>
        <h4 class="font-semibold  text-lg">{like.title}</h4>
        <p class="text-sm opacity-50 mt-1">Updated 2 days ago</p>
      </div>
      <div class="justify-center items-center flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  {/each}

  <div class="divider" />

  <button
    on:click={() => {
      push("/mypersonality");
    }}
    class="flex mt-4 btn btn-outline gap-3   "
  >
    <h4 class="font-semibold ">Personality Details</h4>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </button>
  <button
    on:click={() => {
      push("/monthly-mood");
    }}
    class="flex mt-4 btn btn-outline gap-3   "
  >
    <h4 class="font-semibold ">Check Monthly Mood Boards</h4>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </button>
</section>
