<script setup>
const props = defineProps(['name', 'label']);
const emit = defineEmits('updateLabelValue')
let name = props.name;
let label = props.label;

function updateLabel(e) {
  e.preventDefault();
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