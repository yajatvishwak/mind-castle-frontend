<script>
  import Navbar from "./Navbar.svelte";
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
>
  <Navbar />
  <div class="text-center mt-8">
    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
      My Personality
    </h3>
  </div>

  <div class="flex items-center justify-center bg-gradient-to-br mt-8">
    <div
      class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs"
    >
      <img
        class="mb-3 w-32 h-32 rounded-full mx-auto"
        src="https://static.neris-assets.com/images/personality-types/avatars/intp-logician.png"
        alt=""
      />
      <h1 class="text-lg text-gray-700">INTP</h1>
      
      <p class="text-sm">E</p><progress class="progress progress-success w-36" value="10" max="100" />
      <progress class="progress progress-success w-36" value="40" max="100" />
      <progress class="progress progress-success w-36" value="70" max="100" />
     
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
