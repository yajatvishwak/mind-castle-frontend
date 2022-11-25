<script>
  import { push, location } from "svelte-spa-router";
</script>

<div class="flex justify-between items-center">
  <img on:click={() => push("/home")} src="logo.png" class="h-10 " alt="" />
  <div class="flex gap-3 items-center">
    <!-- <div class="text-sm">
      {localStorage.getItem("username")}/{localStorage.getItem("personality")}
    </div> -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->

    <div class="dropdown dropdown-end">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          /></svg
        >
      </button>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu dropdown-content p-2 dark:bg-slate-800 bg-white shadow  flex flex-col gap-2 rounded-box w-52 mt-4"
      >
        {#if $location.includes("home")}
          <li><a class="bg-indigo-100" href="/#/home">Home</a></li>
        {:else}
          <li><a href="/#/home">Home</a></li>
        {/if}
        {#if $location.includes("profile")}
          <li><a class="bg-indigo-100" href="/#/profile">Profile</a></li>
        {:else}
          <li><a href="/#/profile">Profile</a></li>
        {/if}
        {#if $location.includes("event")}
          <li><a href="/#/event-logs" class="bg-indigo-100">Event</a></li>
        {:else}
          <li><a href="/#/event-logs">Event</a></li>
        {/if}
        {#if $location.includes("troops")}
          <li><a href="/#/troops" class="bg-indigo-100">Troops</a></li>
        {:else}
          <li><a href="/#/troops">Troops</a></li>
        {/if}

        <li class="bg-red-600 text-white rounded-box flex">
          <div
            on:click={() => {
              localStorage.clear();
              push("/signin");
            }}
          >
            <a>Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
