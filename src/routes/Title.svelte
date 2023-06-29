<script lang="ts">
    let emojiList = [
        "🍞",
    ]
</script>

<div class="flex justify-center items-center gap-2">
    <div class="text-4xl">
        {emojiList[Math.floor((Math.random()*emojiList.length))]}
    </div>
    <div class="text-5xl font-bold">
        What To <span class="text-yellow-400">Eat .</span>
    </div>
</div>