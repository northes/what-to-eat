<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { editModel, itemList } from "$lib/stores/edit";
  let ty: number = 0;
  let finalIndex = -1;
  let run: boolean = false;
  let itemHeight = 3.75;

  let list: string[] = [];
  itemList.subscribe((ls) => {
    list = ls;
  });

  let inter = setInterval(() => {
    if (!run) {
      return;
    }
    if (ty >= (list.length - 1) * itemHeight) {
      ty = 0;
      return;
    }
    ty++;
    // console.log(ty);
  }, 2);

  onDestroy(() => {
    clearInterval(inter);
  });

  onMount(() => {
    const bodyWidth = document.body.clientWidth;
    // console.log(bodyWidth);
    if (bodyWidth <= 768) {
      itemHeight = 3;
    }
  });

  function doGo() {
    run = !run;
    if (run) {
      finalIndex = list.length + 999;
      list = list.sort(function () {
        return 0.5 - Math.random();
      });
    }
    let index = Math.round(ty / itemHeight);

    switch (index) {
      case 0:
        index = 1;
        ty = itemHeight * 1;
      case list.length - 1:
        index = list.length - 2;
        ty = itemHeight * (list.length - 2);
    }

    // console.log(ty / itemHeight);
    // console.log(Math.round(ty / itemHeight));
    ty = itemHeight * Math.round(ty / itemHeight) - itemHeight * 0.8;
    // console.log(list[index]);
    finalIndex = index;
  }
</script>

<div>
  <div
    class="relative h-32 overflow-hidden rounded border-2 border-gray-200 md:h-40"
  >
    <ul
      class="absolute left-0 top-0 w-full text-center {!run
        ? 'transition-transform duration-[1000ms]'
        : ''}"
      style="transform: translateY(-{ty}rem)"
    >
      {#each list as item, i}
        <li
          class="blur-xs font-mono text-5xl font-bold md:text-6xl {!run &&
          finalIndex === i
            ? ''
            : 'text-gray-300'}
            "
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
</div>

<div>
  <button
    on:click={doGo}
    class="mt-5 w-full rounded bg-yellow-400 px-4 py-2 text-white disabled:bg-gray-300"
    disabled={$editModel}
  >
    {#if run}
      Stop
    {:else if finalIndex === -1}
      Go / Stop
    {:else}
      Go
    {/if}
  </button>
</div>

<style>
</style>
