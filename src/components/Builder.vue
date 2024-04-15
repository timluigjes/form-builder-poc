<script setup>
import {useFormStore} from "@/store/form.js";
import {Wrench} from "lucide-vue-next";
const formStore = useFormStore();

function buildForm() {
  let arr = [];
  formStore.fields.forEach(field => {
    console.log(field);
    arr.push({name: field.name, component: field.component});
  });
}
</script>

<template>
  <div class="col-start-2 col-span-11 field flex flex-col gap-4">
    <div class="field" v-for="formField in formStore.fields">
      <component :is="formField.field" :name="'field_'+formField.index" :label="formField.label"/>
    </div>
    <button @click="buildForm" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300"><Wrench/> Build</button>
  </div>
</template>

<style scoped>

</style>