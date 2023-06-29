<script lang="ts">
  import { editModel, itemList } from "$lib/stores/edit";

  let input: string = "";

  itemList.subscribe((ls) => {
    input = "";
    for (let i in ls) {
      // console.log(i,ls[i])
      if (input.length === 0) {
        input = ls[i];
      } else {
        input += "\n" + ls[i];
      }
    }
  });

  function save() {
    let list = input.split(/[\s\n]/);
    console.log(list);
    itemList.update(() => {
      return list;
    });
    editModel.update(() => {
      return false;
    });
  }
</script>

{#if $editModel}
  <textarea
    name="editMod"
    bind:value={input}
    rows="10"
    class="rounded w-full px-2 py-1 bg-gray-200"
    placeholder="One line represents one"
  />
  <div class="flex gap-2">
    <button class="grow bg-yellow-400 py-2 text-white rounded" on:click={save}
      >Save</button
    >
    <button class="grow bg-gray-200/50 py-2 text-gray-600 rounded"
      on:click={() => {editModel.update(() => {
        return false;
      })}}>Unsave</button
    >
  </div>
{/if}
