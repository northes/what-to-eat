<script lang="ts">
  let emojiList = ["🍞"];
</script>

<div class="flex items-center justify-center gap-2">
  <div class="text-3xl md:text-4xl">
    {emojiList[Math.floor(Math.random() * emojiList.length)]}
  </div>
  <div class="text-4xl font-bold md:text-5xl">
    What To <span class="text-yellow-400">Eat .</span>
  </div>
</div>
