<script setup>
import Label from './Label.vue'
import {useLabel} from "@/mixins/label.js";

const props = defineProps(['name', 'label']);
let name = props.name;
let label = props.label;

const {updateLabel} = useLabel();
</script>

<template>
<div>
  <Label class="sr-only" :name="name" :label="label" @updateLabelValue="updateLabel"/>
  <input type="file" :name="name" :id="name" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400">
</div>
</template>

<style scoped>

</style>