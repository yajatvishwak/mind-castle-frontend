<script>
  import { push } from "svelte-spa-router";

  export let title = "";
  export let timeago = "";
  export let dp = "";
  export let username = "";
  export let likes = "";
  export let comments = "";
  export let jid = "";
  export let match;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => push("/journey/" + jid)}
  class="flex rounded-lg flex-col  dark:bg-slate-800  bg-white p-5 shadow-sm my-2"
>
  <h4 class="font-semibold   line-clamp-2">
    {title}
  </h4>
  <div class="flex justify-between items-center">
    <p class="text-sm opacity-50 mt-1">Updated {timeago}</p>
    {#if match}
      <p class="text-xs opacity-50 mt-1 badge">{match.toFixed(1)}% match</p>
    {/if}
  </div>
  <div class="flex text-sm gap-2 mt-2 items-center">
    <div class="w-7 rounded-full bg-indigo-400">
      <img
        class="w-full h-full rounded-full"
        src={"https://avatars.dicebear.com/api/miniavs/" + username + ".svg"}
        alt=""
      />
    </div>
    <div class="flex justify-between w-full items-center">
      <div class="font-bold">{username}</div>
      <div class="text-xs">{likes} likes, {comments} comments</div>
    </div>
  </div>
</div>
