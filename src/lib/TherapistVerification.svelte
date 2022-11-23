<script>
  import Navbar from "./Navbar.svelte";
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg"
>
  <Navbar />

  <div class="mt-10">
    <div class="text-xl font-bold">Hello, Therapist!</div>
    <div class="opacity-50">Help us verify this journey</div>
    <div class="mt-3">
      As a mission to keep the platform moderated, we allow therapists like you
      to verify this journey. If you feel that this journey resonates with you
      and could help others, go ahead and verify it!
    </div>
    <form class="mt-10">
      <div class="label-text">Your Display name</div>
      <input
        type="text"
        class="input input-bordered w-full mt-2"
        name=""
        id=""
      />
      <div class="label-text mt-3">Certification Number</div>
      <input
        type="text"
        class="input input-bordered w-full mt-2"
        name=""
        id=""
      />
    </form>
  </div>
</section>
