<script>
  import { push, location } from "svelte-spa-router";
</script>

<div
  class="fixed bottom-4 w-full  rounded-xl max-w-lg right-1/2 left-1/2 transform -translate-x-1/2 "
>
  <div
    class="mx-7 py-4 px-7 rounded-full bg-indigo-600 text-white flex justify-between items-center"
  >
    <button
      on:click={() => push("/home")}
      class={`flex flex-col items-center hover:scale-95 cursor-pointer transition-all justify-center px-4 py-1 ${
        $location.includes("home") ? "bg-indigo-700  rounded-xl" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <div class="text-xs">Home</div>
    </button>

    <button
      on:click={() => push("/add")}
      class={`flex flex-col items-center hover:scale-95 cursor-pointer transition-all justify-center px-4 py-1 ${
        $location.includes("add") ? "bg-indigo-700 rounded-xl" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <div class="text-xs">Add</div>
    </button>
    <button
      on:click={() => push("/read-journey")}
      class={`flex flex-col items-center hover:scale-95 cursor-pointer transition-all justify-center px-4 py-1 ${
        $location.includes("read-journey") ? "bg-indigo-700  rounded-xl" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
      <div class="text-xs">Read</div>
    </button>
  </div>
</div>
