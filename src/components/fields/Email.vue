<script setup>
import Label from './Label.vue';
import {useLabel} from "@/mixins/label.js";

const props = defineProps(['label','name'])
let name = props.name;
let label = props.label;

const {updateLabel} = useLabel()
</script>

<template>
  <div class="field">
    <Label :name="name" :label="label" @updateLabelValue="updateLabel"/>
    <input type="email" :id="name" :name="name"
           class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
  </div>

</template>

<style scoped>

</style>