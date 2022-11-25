<script>
  import Navbar from "./Navbar.svelte";
  import { push } from "svelte-spa-router";
  let data = {
    troops: [
      {
        troopTitle: "Moving into a new city",
        id: "1",
        troopOwner: {
          name: "John Doe",
          id: "1",
          dp: "https://picsum.photos/200",
        },
      },
      {
        troopTitle: "Talk to me now",
        id: "1",
        troopOwner: {
          name: "John Doe",
          id: "1",
          dp: "https://picsum.photos/200",
        },
      },
      {
        troopTitle: "I am here for you",
        id: "1",
        troopOwner: {
          name: "John Doe",
          id: "1",
          dp: "https://picsum.photos/200",
        },
      },
    ],
  };
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen  mx-auto max-w-lg"
>
  <Navbar />

  <div class="mb-5 justify-between mt-8">
    <h4 class="font-medium text-slate-500">Troops</h4>
  </div>

  {#each data.troops as troop}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class=""
      on:click={() => {
        push(`/troop/chat/${troop.id}`);
      }}
    >
      <div
        class="flex rounded-lg flex-col  dark:bg-slate-800  bg-white p-5 shadow-sm my-2"
      >
        <div class="font-semibold   line-clamp-2">
          {troop.troopTitle}
        </div>

        <div class="flex text-sm gap-2 mt-2 items-center">
          <div class="w-7 rounded-full bg-indigo-400">
            <img
              class="w-full h-full rounded-full"
              src={troop.troopOwner.dp}
              alt=""
            />
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="font-bold">{troop.troopOwner.name}</div>
            <div class="text-xs">5 participants</div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>
