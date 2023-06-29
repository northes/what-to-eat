<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  let ty: number = 0;
  let finalIndex = -1;
  let run: boolean = false;
  let itemHeight = 3.75;

  let list: string[] = [
    "炒年糕",
    "馄饨",
    "拉面",
    "烩面",
    "热干面",
    "刀削面",
    "油泼面",
    "炸酱面",
    "炒面",
    "重庆小面",
    "米线",
    "酸辣粉",
    "土豆粉",
    "螺狮粉",
    "凉皮儿",
    "麻辣烫",
    "肉夹馍",
    "羊肉汤",
    "炒饭",
    "盖浇饭",
    "卤肉饭",
    "烤肉饭",
    "黄焖鸡米饭",
    "驴肉火烧",
    "川菜",
    "麻辣香锅",
    "火锅",
    "酸菜鱼",
    "烤串",
    "披萨",
    "烤鸭",
    "汉堡",
    "炸鸡",
    "寿司",
    "蟹黄包",
    "煎饼果子",
    "生煎",
    "炒年糕",
    "馄饨",
  ];

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
    class="bg-yellow-400 text-white w-full rounded px-4 py-2 mt-5"
    >Go / Stop</button
  >
</div>

<style>
  .inbox {
    /* position: absolute;
        left: 0;
        top: 0;
        transform: translateY(-10px); */
  }
</style>
