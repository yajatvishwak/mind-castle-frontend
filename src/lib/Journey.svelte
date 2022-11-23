<script>
  import axios from "axios";

  // @ts-nocheck
  import moment from "moment";
  import toast from "svelte-french-toast";
  import CommentCard from "./components/CommentCard.svelte";
  import Likes from "./components/Likes.svelte";
  import HeatMap from "./HeatMap.svelte";

  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  export let params = {};
  let showSummary = false;
  let isTherapistModalOpen = false;
  let isTherapistDetailModalOpen = false;
  let data = {
    title: "My Journey towards getting placed",
    author: "Andrew Tate",
    journeyBeginDate: "12 November 2022",
    hasEnded: false,
    validity: {
      isVerifiedJourney: true,
      therapist: {
        name: "String",
        tno: "String",
        contactLink: "String",
      },
    },
    likes: [
      { imgurl: "https://avatars.dicebear.com/api/miniavs/1223.svg" },
      { imgurl: "https://avatars.dicebear.com/api/miniavs/11f3.svg" },
      { imgurl: "https://avatars.dicebear.com/api/miniavs/5hsr.svg" },
    ],
    isLiked: false,

    // textSummary: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
    //     facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
    //     nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
    story: [
      {
        date: "14th November",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
        facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
        nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
        imgurl: "https://via.placeholder.com/300",
      },
      {
        date: "13th November",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
        facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
        nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
        // imgurl: "https://via.placeholder.com/300",
      },
    ],
  };
  function likeJourney() {
    data.isLiked = !data.isLiked;
  }

  async function fetchData() {
    const res = await axios.post($baseurl + "get-journey", {
      journeyid: params.journeyid,
    });
    if (res && res.data) {
      // data = res.data;
      console.log(res.data);
      const stories = res.data.journey.journeys;
      const formattedStories = stories.map((story) => {
        return {
          date: moment(story.date).format("DD MMMM, YYYY"),
          content: story.text,
        };
      });
      console.log(formattedStories);
      data.story = formattedStories;
      data.hasEnded = res.data.journey.journeyend;
      data.author = res.data.journey.author;
      data.title = res.data.journey.title;
      data.textSummary = res.data.journey.summary;
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  }
</script>

<input
  type="checkbox"
  class="modal-toggle"
  checked={isTherapistDetailModalOpen}
/>
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box relative ">
    <button
      on:click={() => (isTherapistDetailModalOpen = false)}
      class="btn btn-sm btn-circle absolute right-2 top-2"
    >
      ✕
    </button>
    <div class="flex flex-col">
      <h3 class="text-lg font-bold">{data.validity.therapist.name}</h3>
      <div class="py-4">
        <div>This article is verified by the above therapist.</div>
        <button
          class="btn btn-outline btn-sm"
          on:click={() => {
            window.location.href = data.validity.therapist.contactLink;
          }}>View Profile</button
        >
      </div>
    </div>
  </div>
</div>

<input type="checkbox" class="modal-toggle" checked={isTherapistModalOpen} />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box relative">
    <button
      on:click={() => (isTherapistModalOpen = false)}
      class="btn btn-sm btn-circle absolute right-2 top-2"
    >
      ✕
    </button>
    <h3 class="text-lg font-bold">Are you a verified Therapist?</h3>
    <p class="py-4">
      As a mission to keep the platform moderated, we allow therapists like you
      to verify this journey. If you feel that this journey resonates with you
      and could help others, go ahead and verify it!
    </p>
  </div>
</div>
<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen mx-auto max-w-lg"
>
  <Navbar />
  <div class="font-bold mt-7 text-2xl">{data.title}</div>
  <div class="flex items-center justify-between mt-2">
    <div class="">by <b>{data.author}</b></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- <div on:click={() => (showSummary = !showSummary)} class="text-sm">
      {showSummary ? "Hide Summary" : "Show Summary"}
    </div> -->
  </div>
  <!-- {#if showSummary}
    <div class="p-3 border rounded-md mt-3">
      {data.textSummary}
    </div>
  {/if} -->
  {#if data.validity.isVerifiedJourney}
    <button
      on:click={() => (isTherapistDetailModalOpen = true)}
      class="rounded-full px-2 py-1  border-2 w-fit text-xs mt-2 border-gray-600"
    >
      ✔️ Verified Journey
    </button>{:else}
    <div
      class="rounded-full px-2 py-1 border-dashed border-2 w-fit text-xs mt-2 border-gray-600"
    >
      Unverified Journey
    </div>
  {/if}

  {#if data.hasEnded}
    <div class="divider ">Journey Ends</div>
  {/if}
  <div class="">
    {#each data.story as d}
      <div class="mt-4">
        <div class="underline font-bold">{d.date}</div>
        <div>{d.content}</div>
        {#if d.imgurl}
          <img
            src={d.imgurl}
            class="w-full max-h-48 object-cover mt-2"
            alt=""
          />
        {/if}
      </div>
    {/each}
    <div class="divider text-xs">
      Journey Begins - {data.journeyBeginDate}
    </div>
  </div>

  <div class="mt-10">
    <div class="opacity-50">Analysis of mood (Monthly)</div>
    <HeatMap />
  </div>
  <div class="mt-10">
    <div class="flex justify-between items-center">
      <div class="cursor-pointer" on:click={likeJourney}>
        {#if data.isLiked}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"
              />
            </svg>
          </div>
        {:else}
          <div>
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
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </div>
        {/if}
      </div>

      <Likes likes={data.likes} />
    </div>
    <div class="opacity-50">Public Comments</div>
    <form class="mt-4">
      <textarea
        type="text"
        placeholder="Your ten cents here..."
        class="textarea w-full textarea-bordered bg-transparent"
        name=""
        rows={6}
        id=""
      />
      <button
        on:click={() => {}}
        class="btn w-full bg-indigo-500 text-white"
        type="submit">Submit</button
      >
    </form>
    <CommentCard />
    <CommentCard />
    <CommentCard />
  </div>
</section>
