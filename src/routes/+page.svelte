<script lang="ts">
  import Title from "./Title.svelte";
  import RollerWheel from "./RollerWheel.svelte";
  import ControllerBar from "./ControllerBar.svelte";
</script>

<main class="w-1/2 space-y-6">
  <Title />
  <ControllerBar />
  <RollerWheel />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
