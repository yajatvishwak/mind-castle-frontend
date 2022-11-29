<script>
  import { onMount } from "svelte";
  import { getPersonalityData } from "../lib/personality/personality";
  import Navbar from "./Navbar.svelte";
  export let params = {};
  let personality = params.id;
  let data = {
    img: "intp.png",
    tagline: "THE ARCHITECT",
    desc1: `Philosophical innovators, INTPs are enthralled by logical reasoning,
      systems, and aesthetics. They are theoretically obsessed and look for an
      overarching principle underlying what they observe. They seek to
      comprehend life's underlying themes in all of their complexity.`,
    desc2: ` INTPs are detached, analytical observers who, because they are so
      engrossed in their thoughts, can appear to be unaware of their
      surroundings. They spend a lot of time thinking internally, exploring
      ideas, connecting dots, and trying to understand how things work. The
      Architect views life as an ongoing investigation into the complexities of
      the cosmos.`,
    standsfor1: `The INTP personality type is defined by a person's need for solitude (introverted),
      focus on ideas and concepts rather than facts and details (iNtuitive), use
      of logic and reason in decision-making (thinking), and preference for spontaneity
      and flexibility over planned and organised activities.`,
    values1: `Although they have a cold demeanour, INTPs are deeply passionate about
        logic, research, and invention. In order to integrate the concepts they
        have noticed in their settings, they try to build intricate systems of
        understanding. They will go to tremendous mental lengths in an effort to
        come up with original answers to intriguing challenges since their
        thoughts are sophisticated and busy.`,
    values2: ` The INTP tends to be unconventional and is less likely to follow the majority
        in favour of developing their own unique method of doing things. The INTP
        is wary of traditions and assumptions and is willing to dissect concepts
        that other people take for granted. INTPs hold little holy and are ruthless
        in their analysis of ideas and beliefs. Other people who adhere to ideologies
        that defy reason frequently leave them perplexed.`,

    see1: `INTPs frequently seem eccentric and odd to others because they are so
        deeply absorbed in their own thinking. The INTP has a very active
        intellect, and because of their tendency to focus inward, they may
        overlook little matters like home furnishings or acceptable attire.
        Instead than engaging in small talk, they can get fervent when
        discussing subjects like physics, math, computers, or more grandiose
        cosmic theoretical conundrums. The Architect is frequently more
        interested in the theory underlying everything than in reality.`,
    see2: `INTPs often speak clearly and choose their words carefully to convey
        complicated topics. Even in the most informal of talks, they insist on
        intellectual rigour, and they are quick to point out errors in logic or
        ideas. An INTP who is more engaged in examining logic may disregard
        social graces, and they may insult others by subjecting their deeply
        held values and beliefs to logical analysis.`,
    famous: `Famous INTPs include Albert Einstein, Thomas Jefferson, Kristen Stewart,
        Rene Descartes, Charles Darwin, Marie Curie, Socrates, and Abraham
        Lincoln.`,
    hobbies: `Reading, attending art and cultural events, playing chess and other
        strategy games, writing, taking classes, using computers, camping,
        trekking, and meditation are all common pastimes for INTPs.`,
  };
  onMount(() => {
    personality = personality.toUpperCase();
    //@ts-ignore
    data = getPersonalityData(personality);
  });
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen mx-auto max-w-lg "
>
  <Navbar />

  <div class="text-xl font-bold mt-8 ">Your Personality</div>
  <div
    class="bg-indigo-500 relative rounded-xl p-10 text-white flex items-center justify-center flex-col mt-4"
  >
    <div class="opacity-50">You are an</div>
    <div class="text-4xl font-bold">{personality}</div>
    <img
      class="absolute w-48 h-48 -left-10 top-4"
      src={data.img}
      alt=""
      srcset=""
    />
  </div>
  <div class="font-bold text-xl self-end mt-4">{data.tagline}</div>

  <div class="mt-20 self-start">
    <p class="text-justify">
      {data.desc1}
    </p>
    <div class="py-4" />
    <p class="text-justify">
      {data.desc2}
    </p>
    <div class="my-4 font-bold text-xl">What does {personality} stand for?</div>
    <div class="text-justify">
      {data.standsfor1}

      <div class="my-4 font-bold text-xl">
        {personality} Values and Motivations
      </div>
      <div class="text-justify">
        {data.values1}
        <div class="my-4" />
        {data.values2}
      </div>
      <div class="my-4 font-bold text-xl">How Others See the {personality}</div>
      <div class="text-justify">
        {data.see1}
        <div class="my-4" />
        {data.see2}
      </div>
      <div class="my-4 font-bold text-xl">Famous {personality}s</div>
      <div class="text-justify">
        {data.famous}
      </div>
      <div class="my-4 font-bold text-xl">
        {personality} Hobbies and Interests
      </div>

      <div class="">
        {data.hobbies}
      </div>
    </div>
  </div>
</section>
