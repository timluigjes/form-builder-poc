<script setup>
import {ref} from 'vue';
import Label from './Label.vue';
import {useLabel} from "@/mixins/label.js";

const props = defineProps(['type', 'name'])
let type = props.type;
let name = props.name;

if (!type) {
  let type = ref('text')
}

const {label, updateLabel} = useLabel()
</script>

<template>
  <div class="field">
    <Label :name="name" :label="label" @updateLabelValue="updateLabel"/>
    <input :type="type" :id="name" :name="name" placeholder="placeholder"
           class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
  </div>

</template>

<style scoped>

</style>