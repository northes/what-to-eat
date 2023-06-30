<script lang="ts">
  import { editModel, itemList } from "$lib/stores/edit";
  import { defaultItemList } from "$lib/contents/itemList";

  function setDefaultItes() {
    itemList.update(() => {
      return defaultItemList;
    });
  }
</script>

<div class="flex justify-center gap-6">
  <button
    class="rounded px-3 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-500"
    on:click={setDefaultItes}>Reset Items</button
  >
  <button
    class="rounded px-3 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-500"
    on:click={() => {
      editModel.update((e) => {
        return !e;
      });
    }}>Edit Items</button
  >
  <button
    class="rounded px-3 py-1 text-gray-300 hover:bg-gray-200 hover:text-gray-500"
    >Share</button
  >
</div>
