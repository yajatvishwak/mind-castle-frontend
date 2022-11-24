<script>
  import { onMount } from "svelte";
  import CalendarDates from "calendar-dates";
  export let mood = {};
  export let month = "";
  console.log(mood);
  const calendarDates = new CalendarDates();
  let mat = [];
  onMount(async () => {
    const getMonthIndex = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    const nov2022 = new Date(2022, getMonthIndex[month] - 1);
    mat = await calendarDates.getMatrix(nov2022);
    console.log(mat);
  });
</script>

<div>
  <div class="text-xl mb-4">{month}</div>
  <div class="grid grid-cols-7 grid-flow-row w-full  gap-2   ">
    {#each mat as row}
      {#each row as col}
        {#if col.type === "previous"}
          <div
            class="p-2 rounded-full bg-slate-800 text-center text-xs opacity-25"
          >
            {col.date}
          </div>
        {/if}
        {#if col.type === "current"}
          {#if Object.keys(mood).includes(col.date + "")}
            {#if mood[col.date] === "happy"}
              <div
                class="p-2 rounded-full dark:bg-green-900 bg-green-200 text-center text-xs "
              >
                😁
              </div>
            {/if}
            {#if mood[col.date] === "sad"}
              <div
                class="p-2 rounded-full dark:bg-red-900  bg-red-200 text-center text-xs "
              >
                😞
              </div>
            {/if}
            {#if mood[col.date] === "neutral"}
              <div
                class="p-2 rounded-full border border-slate-400 text-center text-xs "
              >
                n
              </div>
            {/if}
          {:else}
            <div
              class="p-2 rounded-full border border-slate-400 text-center text-xs "
            >
              {col.date}
            </div>
          {/if}
        {/if}
        {#if col.type === "next"}
          <div
            class="p-2 rounded-full bg-slate-800 text-center text-xs opacity-25"
          >
            {col.date}
          </div>
        {/if}
      {/each}
    {/each}
  </div>
</div>
