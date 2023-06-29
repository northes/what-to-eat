import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store";
import { defaultItemList } from "$lib/contents/itemList.ts"

export const itemList = persist(writable(defaultItemList), createLocalStorage(), "itemList")

export const editModel = writable(false)