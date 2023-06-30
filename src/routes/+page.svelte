<script lang="ts">
  import Title from "./Title.svelte";
  import RollerWheel from "./RollerWheel.svelte";
  import ControllerBar from "./ControllerBar.svelte";
  import Edit from "./Edit.svelte";
</script>

<main class="w-3/4 space-y-6 md:w-1/2">
  <Title />
  <ControllerBar />
  <RollerWheel />
  <Edit />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
