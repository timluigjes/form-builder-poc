<script setup>
import {ref, watchEffect} from 'vue';
import Label from './Label.vue';
import {useLabel} from "@/mixins/label.js";
import slugify from "@sindresorhus/slugify";
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
    <div class="grid grid-cols-2 gap-4">
      <template v-for="(option,index) in options">
        <div class="radio-option flex gap-2 items-center">
          <input type="radio" :id="slugify(option)" :name="name" :value="option">
          <label contenteditable="true" @blur="updateOptionLabel($event, index)"
                 @keydown.enter="updateOptionLabel($event, index)">{{ option }}</label>
        </div>
      </template>
      <button class="col-span-1" @click="addOption">
        <CirclePlus/>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>