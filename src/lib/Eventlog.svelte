<script>
  import axios from "axios";
  import moment from "moment";
  import { onMount } from "svelte";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  let data = {
    logs: {
      "03/12/2022": {
        logdetails: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perspiciatis enim, eveniet excepturi voluptatibus inventore repellendus tenetur iure veritatis suscipit maxime vitae nobis eligendi ad doloribus. Dicta, at cupiditate. Possimus?`,
            eventOwner: { username: "1234" },
            sentimentScore: 34,
            mood: "happy",
            date: new Date(2022, 11),
          },
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perspiciatis enim, eveniet excepturi voluptatibus inventore repellendus tenetur iure veritatis suscipit maxime vitae nobis eligendi ad doloribus. Dicta, at cupiditate. Possimus?`,
            eventOwner: { username: "1234" },
            sentimentScore: 56,
            mood: "happy",
            date: new Date(2022, 11),
          },
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perspiciatis enim, eveniet excepturi voluptatibus inventore repellendus tenetur iure veritatis suscipit maxime vitae nobis eligendi ad doloribus. Dicta, at cupiditate. Possimus?`,
            eventOwner: { username: "1234" },
            sentimentScore: 12,
            mood: "happy",
            date: new Date(2022, 11),
          },
        ],
        analytics: {
          overallmood: "happy",
          overallsentimentscore: 23,
          mostusedwords: ["Car", "sad"],
        },
      },
    },
  };
  onMount(async () => {
    await fetchData();
  });
  async function fetchData() {
    const res = await axios.post($baseurl + "event/get-event", {
      token: localStorage.getItem("token"),
    });
    if (res.data) {
      data.logs = res.data.payload;
      // console.log(res.data);
    }
  }
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg"
>
  <Navbar />

  <div class="text-2xl mt-8">Event Logs</div>
  <div class="opacity-70">What we've picked up from your recent searches</div>
  <div class="mt-5 flex flex-col gap-3 last:mb-10">
    {#each Object.keys(data.logs) as date}
      <div class="font-bold my-3">{date}</div>
      <div class="flex gap-3 pb-4 overflow-auto ">
        <div class="p-5  flex-none dark:bg-slate-800 bg-white rounded-lg">
          <div class="flex flex-col justify-center items-center gap-2">
            <div>{data["logs"][date]["analytics"].overallmood}</div>
            <div class="text-xs opacity-50">Overall Mood</div>
          </div>
        </div>
        <div class="p-5  flex-none dark:bg-slate-800 bg-white rounded-lg">
          <div class="flex flex-col justify-center items-center gap-2">
            <div>{data["logs"][date]["analytics"].overallsentimentscore}</div>
            <div class="text-xs opacity-50">Overall Sentiment score</div>
          </div>
        </div>
        {#each data["logs"][date]["analytics"].mostusedwords as word}
          <div class="p-5  flex-none dark:bg-slate-800 bg-white rounded-lg">
            <div class="flex flex-col justify-center items-center gap-2">
              <div>{word}</div>
              <div class="text-xs opacity-50">Most used words</div>
            </div>
          </div>
        {/each}
      </div>
      {#each data["logs"][date]["logdetails"] as log}
        <div class="p-3 border rounded-lg ">
          <div class="font-bold mt-3">{log.text}</div>
          <div class="divider text-xs">Analysis</div>
          <div class="mt-3 text-sm">Sentiment Score: {log.sentimentScore}</div>
          <div class="flex justify-between">
            <div class="text-sm">Mood: {log["mood"]}</div>
            <div class="text-sm">{moment(log["date"]).format("hh:mm A")}</div>
          </div>
        </div>
      {/each}
      <div class="divider" />
    {/each}
  </div>
</section>
