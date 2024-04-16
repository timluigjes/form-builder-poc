<script setup>
import {useFormStore} from "@/store/form.js";

const props = defineProps(['name', 'label']);
const emit = defineEmits('updateLabelValue')
let name = props.name;
let label = props.label;
const formStore = useFormStore();

function updateLabel(e) {
  e.preventDefault();
  formStore.updateLabel(name, e.target.innerText);
  emit('updateLabelValue', e.target.innerText);

}
</script>

<template>
  <label contenteditable="true"
         class="block text-sm font-medium mb-2 border-gray-100"
         @blur="updateLabel" @keydown.enter="updateLabel">{{ label }}</label>
</template>

<style scoped>

</style>