<script>
  import Navbar from "./Navbar.svelte";
  import Intp from "./personality/INTP.svelte";
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen"
>
  <Navbar />

  <div class="text-xl font-bold mt-8 ">Your Personality</div>

  <div class="flex items-center justify-center ">
    <div class="font-semibold text-center rounded-3xl p-10 max-w-xs">
      <img
        class="mb-3 w-32 h-32 rounded-full mx-auto"
        src="https://static.neris-assets.com/images/personality-types/avatars/intp-logician.png"
        alt=""
      />
      <h1 class="text-lg opacity-50">INTP</h1>
      <div class="flex items-center gap-4">
        <p>I</p>
        <progress class="progress progress-success w-36" value="25" max="100" />
        <p>E</p>
      </div>

      <div class="flex items-center gap-4">
        <p>F</p>
        <progress class="progress progress-success w-36" value="78" max="100" />
        <p>P</p>
      </div>

      <div class="flex items-center gap-4">
        <p>E</p>
        <progress class="progress progress-success w-36" value="32" max="100" />
        <p>J</p>
      </div>

      <h3 class="text-sm text-gray-400 mt-2 ">
        Introversion (I) , Intuition (N), Thinking (T), Perceiving (P)
      </h3>
      <p class="mt-4">Personality Characteristics</p>
      <p class="mt-4">
        INTPs are quiet, reserved, and thoughtful. As introverts, they prefer to
        socialize with a small group of close friends.
      </p>
      <button
        class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
        >Retake Test</button
      >
    </div>
  </div>
</section>
