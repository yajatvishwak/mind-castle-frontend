<script>
  import Navbar from "./Navbar.svelte";
  import { push } from "svelte-spa-router";
  import baseurl from "./url.store";
  import axios from "axios";
  import toast from "svelte-french-toast";
  import { onMount } from "svelte";
  import Loading from "./components/Loading.svelte";
  let isAddModalOpen = false;
  let troopName = "";

  onMount(async () => {
    await fetchData();
  });
  let loading = false;

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
  async function fetchData() {
    loading = true;
    const res = await axios.post($baseurl + "troops/get-all-troops", {
      token: localStorage.getItem("token"),
    });
    if (res && res.data) {
      data.troops = res.data.troops;
      console.log(data);
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
    for (let t of data.troops) {
      let temp = {};
      for (let { user } of t.messages) {
        temp[user] = temp[user] || 0;
        temp[user] += 1;
      }

      t["count"] = Object.keys(temp).length;
    }
    console.log(data.troops);
    loading = false;
  }
  async function addTroop() {
    loading = true;
    const res = await axios.post($baseurl + "troops/create-troop", {
      troopTitle: troopName,
      token: localStorage.getItem("token"),
    });
    if (res.data.code === "success") {
      toast.success("Created Troop!");
      push("/troop/chat/" + res.data.id);
    }
    loading = false;
  }
</script>

<input type="checkbox" class="modal-toggle" checked={isAddModalOpen} />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box relative ">
    <button
      on:click={() => (isAddModalOpen = false)}
      class="btn btn-sm btn-circle absolute right-2 top-2"
    >
      ✕
    </button>
    <div class="flex flex-col">
      <h3 class="text-lg font-bold">Add a troop</h3>
      <form
        on:submit|preventDefault={addTroop}
        class="flex flex-col gap-2 my-2"
      >
        <div class="mt-3 text-sm opacity-60">Thought Starters:</div>
        <div class="flex text-sm flex-col gap-2">
          <div>> Share wholesome moments</div>
          <div>> Depression is a long fight, but not an alone one</div>
          <div>> Share experiences from around the world</div>
        </div>
        <div class="label-text">Troop name</div>
        <input
          type="text"
          bind:value={troopName}
          class="input w-full input-bordered"
          name=""
          id=""
        />

        <button class="btn bg-indigo-500 mt-2 text-white">Make troop</button>
      </form>
    </div>
  </div>
</div>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen  mx-auto max-w-lg"
>
  <Navbar />
  {#if loading}
    <div class="flex flex-col items-center justify-center  flex-1">
      <Loading mode="troops" />
    </div>
  {:else}
    <div class="mb-5 justify-between flex items-center mt-8">
      <h4 class="font-medium text-slate-500">Troops</h4>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => (isAddModalOpen = true)}
        class="btn btn-xs btn-outline"
      >
        +
      </div>
    </div>

    {#each data.troops as troop}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class=""
        on:click={() => {
          push(`/troop/chat/${troop._id}`);
        }}
      >
        <div
          class="flex rounded-lg flex-col  dark:bg-slate-800  bg-white p-5 shadow-sm my-2"
        >
          <div class="font-semibold   line-clamp-2">
            {troop.troopTitle}
          </div>

          <div class="flex text-sm gap-2 mt-2 items-center">
            by
            <div class="w-7 rounded-full bg-indigo-400">
              <img
                class="w-full h-full rounded-full"
                src={"https://avatars.dicebear.com/api/miniavs/" +
                  troop.troopOwner.username +
                  ".svg"}
                alt=""
              />
            </div>
            <div class="flex justify-between w-full items-center">
              <div class="font-bold">{troop.troopOwner.name}</div>
              <div class="text-xs">{troop.count} participants</div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</section>
