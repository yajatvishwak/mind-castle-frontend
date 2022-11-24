<script>
  import { push } from "svelte-spa-router";
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
      <ul
        tabindex="0"
        class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li><a>Profile</a></li>
        <li><a>Event</a></li>
        <li><a>Troops</a></li>
        <li class="bg-red-200 rounded-box">
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
