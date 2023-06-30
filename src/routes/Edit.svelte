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
    class="w-full rounded bg-gray-200 px-2 py-1"
    placeholder="One line represents one"
  />
  <div class="flex gap-2">
    <button class="grow rounded bg-yellow-400 py-2 text-white" on:click={save}
      >Save</button
    >
    <button
      class="grow rounded bg-gray-200/50 py-2 text-gray-600"
      on:click={() => {
        editModel.update(() => {
          return false;
        });
      }}>Unsave</button
    >
  </div>
{/if}
