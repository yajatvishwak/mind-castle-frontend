<script>
  export let likes = [];
</script>

<div class="my-4 flex items-center gap-3">
  <div class="avatar-group -space-x-6">
    <div class="avatar">
      <div class="w-6">
        <img
          src={(likes[0] && likes[0].dp) ||
            "https://avatars.dicebear.com/api/miniavs/11f3.svg"}
        />
      </div>
    </div>
    <div class="avatar">
      <div class="w-6">
        <img
          src={(likes[1] && likes[1].dp) ||
            "https://avatars.dicebear.com/api/miniavs/11f3.svg"}
        />
      </div>
    </div>
    <div class="avatar">
      <div class="w-6">
        <img
          src={(likes[2] && likes[2].dp) ||
            "https://avatars.dicebear.com/api/miniavs/11f3.svg"}
        />
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="w-6 bg-neutral-focus text-neutral-content">
        <span class="text-xs">{likes.length}</span>
      </div>
    </div>
  </div>
  <div>liked this journey</div>
</div>
