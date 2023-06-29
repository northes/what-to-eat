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
    class="relative h-32 md:h-40 border-2 border-gray-200 rounded overflow-hidden"
  >
    <ul
      class="absolute left-0 top-0 w-full text-center {!run
        ? 'transition-transform duration-[1000ms]'
        : ''}"
      style="transform: translateY(-{ty}rem)"
    >
      {#each list as item, i}
        <li
          class="font-bold text-5xl md:text-6xl font-mono blur-xs {!run &&
          finalIndex === i
            ? ''
            : ''}"
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
    class="bg-yellow-400 disabled:bg-gray-300 text-white w-full rounded px-4 py-2 mt-5"
    disabled={$editModel}>Go / Stop</button
  >
</div>

<style>
</style>
