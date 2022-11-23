<script>
  import Footer from "./components/Footer.svelte";
  import Navbar from "./Navbar.svelte";
  let newmessage = "";
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
  function sendMessage() {
    if (newmessage) {
      messages.push({
        message: newmessage,
        user: {
          username: localStorage.getItem("username"),
          dp: "https://placeimg.com/192/192/people",
        },
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
  <div class="flex flex-col  h-full">
    <div class="text-xl mt-8">Moving to a new city</div>
    <div class="flex flex-col gap-2 w-full my-5 overflow-auto flex-1   ">
      {#each messages as message}
        {#if message.user.username === localStorage.getItem("username")}
          <div
            class="p-3  border-2 text-black self-end max-w-[250px]   rounded-xl"
          >
            {message.message}
          </div>
        {:else}
          <div class="flex gap-3 items-end ">
            <img src={message.user.dp} class="w-10 h-10 rounded-full" alt="" />
            <div
              class="p-3 scroll-m-3  bg-indigo-300 text-indigo-800 max-w-[250px] rounded-xl"
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
          <button class="btn btn-square">
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
</section>
<!-- <Footer /> -->
