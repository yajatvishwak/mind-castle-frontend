<script>
  export let comment = "";
  export let username = "";
  export let dp = "";
</script>

<div class="flex flex-col gap-3 mt-3">
  <div class="p-4 border border-gray-500">
    <div>
      {comment
        ? comment
        : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum minima
      corporis repellat fugit laudantium impedit doloremque labore iste quos
      provident enim, mollitia optio sit obcaecati aspernatur iure. Ipsam, illum
      inventore.`}
    </div>
    <div class="mt-3 flex items-center gap-3">
      <div class="avatar">
        <div class="w-10 rounded-full border ">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src={dp
              ? dp
              : "https://avatars.dicebear.com/api/miniavs/" + username + ".svg"}
          />
        </div>
      </div>
      <div>{username || "Vibha Dandu"}</div>
    </div>
  </div>
</div>
