<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import Footer from "./components/Footer.svelte";
  import { io } from "socket.io-client";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  import Loading from "./components/Loading.svelte";
  export let params = {};

  let newmessage = "";
  let title = "";
  let owner = "";
  let messages = [
    {
      message: "asg asdfasd asdf asdf asdf asd",
      user: {
        username: "Dannyboi",
        dp: "https://placeimg.com/192/192/people",
      },
    },
    {
      message: "uuu u u u u u uuuuuu u u u uu asdasdasd ",
      user: {
        username: "1234",
        dp: "https://placeimg.com/192/192/people",
      },
    },
  ];
  let socket;
  let loading = false;
  onMount(async () => {
    loading = true;
    const { data } = await axios.post($baseurl + "troops/get-troop", {
      troopid: params.id,
      token: localStorage.getItem("token"),
    });
    loading = false;
    console.log(data);
    messages = data.troop.messages;
    title = data.troop.troopTitle;
    owner = data.troop.troopOwner.name;

    socket = io(import.meta.env.VITE_BASEURL_SOCKET);
    socket.on("connect", () => {
      console.log("Connected to chat server");
      socket.emit("join-chatroom", params.id);
    });
    socket.on("message", (message) => {
      messages.push(message);
      messages = [...messages];
    });
  });

  function sendMessage() {
    if (newmessage) {
      socket.emit("send-message", {
        troopid: params.id,
        message: newmessage,
        username: localStorage.getItem("username"),
      });
      newmessage = "";
      messages = [...messages];
    }
  }
</script>

<section
  class="bg-slate-100 w-screen h-screen flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg "
>
  <Navbar />
  {#if loading}
    <Loading mode="chat" />
  {:else}
    <div class="flex flex-col  h-full">
      <div class="text-xl mt-8 font-bold">{title}</div>
      <div class="text-sm ">created by {owner}</div>
      <div class="flex flex-col gap-2 w-full my-5 overflow-auto flex-1 pr-4  ">
        {#each messages as message}
          {#if message.user.username === localStorage.getItem("username")}
            <div
              class="p-3 bg-indigo-300 dark:bg-indigo-900 border-0 dark:text-gray-400  text-indigo-800 self-end max-w-[250px]   rounded-xl"
            >
              {message.message}
            </div>
          {:else}
            <div class="flex gap-3 items-center ">
              <div class="">
                <img
                  src={message.user.dp}
                  class="w-10 h-10 rounded-full"
                  alt=""
                />
                <div class="text-xs text-center">{message.user.name}</div>
              </div>
              <div
                class="p-3 scroll-m-3  bg-indigo-300 dark:bg-indigo-700 dark:text-gray-400 text-indigo-800 max-w-[250px] rounded-xl"
              >
                {message.message}
              </div>
            </div>
          {/if}
        {/each}
      </div>
      <form on:submit|preventDefault={sendMessage} class="mt-auto mb-5">
        <div class="form-control">
          <div class="input-group">
            <input
              bind:value={newmessage}
              type="text"
              placeholder="Your message here..."
              class="input input-bordered w-full"
              name=""
              id=""
            />
            <button class="btn btn-square bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  {/if}
</section>
<!-- <Footer /> -->
