<script>
  import Navbar from "./Navbar.svelte";
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
  };
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
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
    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
      {data.name}
    </h3>
    <div
      class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
    >
      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
      <div class="badge p-4 bg-indigo-500 border-none">{data.personality}</div>
    </div>
  </div>

  <div class="mb-5 flex items-center justify-between mt-8">
    <h4 class="font-medium text-slate-500">Your Journeys</h4>
    <div class="rounded-md bg-gray-400/70 px-2 font-semibold text-gray-900">
      +
    </div>
  </div>

  {#each data.journeys as journey}
    <div class="flex rounded-xl justify-between bg-white p-5 shadow-sm my-2">
      <div>
        <h4 class="font-semibold text-gray-600 text-lg">{journey.title}</h4>
        <p class="text-sm text-slate-400 mt-1">Updated 2 days ago</p>
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

  <div class="mb-5 flex items-center justify-between mt-6">
    <h4 class="font-medium text-slate-500">Personality</h4>
  </div>
  <div class="flex items-center justify-center bg-gradient-to-br">
    <div
      class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs"
    >
      <img
        class="mb-3 w-32 h-32 rounded-full mx-auto"
        src="https://static.neris-assets.com/images/personality-types/avatars/intp-logician.png"
        alt="product designer"
      />
      <h1 class="text-lg text-gray-700">{data.personality}</h1>
      <h3 class="text-sm text-gray-400 mt-2 ">
        Introversion (I) , Intuition (N), Thinking (T), Perceiving (P)
      </h3>
      <p class="mt-4">Personality Characteristics</p>
      <p class="mt-4">
        INTPs are quiet, reserved, and thoughtful. As introverts, they prefer to
        socialize with a small group of close friends.
      </p>
      <button
        class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
        >Retake Test</button
      >
    </div>
  </div>
</section>
