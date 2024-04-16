<script setup>
import {ref, watchEffect} from 'vue';
import Label from './Label.vue';
import {useLabel} from "@/mixins/label.js";
import {useFormStore} from "@/store/form.js";
import {CirclePlus} from "lucide-vue-next";

const props = defineProps(['name', 'label']);
let label = props.label;
let name = props.name;
let options = ref(['option 1', 'option 2']);
const {updateLabel} = useLabel();
const formStore = useFormStore()

watchEffect(function () {
  formStore.updateOptions(name, options.value);
});

function updateOptionLabel(event, index) {
  event.preventDefault();
  options.value[index] = event.target.innerText;
}

function addOption() {
  const totalLength = options.value.length;
  options.value.push(`option ${totalLength + 1}`)
}

</script>

<template>
  <div>
    <Label :name="name" :label="label" @updateLabelValue="updateLabel"/>
    <select>
      <option v-for="option in options">
        {{option}}
      </option>
    </select>
    <div class="grid grid-cols-1">
      <span class="font-semibold py-4">Options</span>
      <ul class="list-disc ps-4" v-for="(option,index) in options">
        <li contenteditable="true" @blur="updateOptionLabel($event, index)"
               @keydown.enter="updateOptionLabel($event, index)">{{ option }}</li>
      </ul>
      <button class="col-span-1" @click="addOption">
        <CirclePlus/>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>