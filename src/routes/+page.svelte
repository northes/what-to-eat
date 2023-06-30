<script lang="ts">
  import Title from "./Title.svelte";
  import RollerWheel from "./RollerWheel.svelte";
  import ControllerBar from "./ControllerBar.svelte";
  import Edit from "./Edit.svelte";
  import Footer from "./Footer.svelte";
</script>

<main class="w-3/4 max-w-lg space-y-6">
  <Title />
  <ControllerBar />
  <RollerWheel />
  <Edit />
  <Footer />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
