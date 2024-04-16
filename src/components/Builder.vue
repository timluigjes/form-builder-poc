<script setup>
import {useFormStore} from "@/store/form.js";
import {Wrench, Trash, Info, Eye} from "lucide-vue-next";
import {ref} from "vue";
import {prettyPrintJson} from "pretty-print-json";

const formStore = useFormStore();
let jsonexample = ref(null);
let showPreview = ref(false);

function buildForm(preview = false, download) {
  let arr = {version: 1, fields: []};
  formStore.fields.forEach(field => {
    arr.fields.push({
      name: field.name,
      index: field.index,
      options: field.options,
      label: field.label,
      type: field.type
    })
  })

  showPreview.value = preview;
  if (preview) {
    jsonexample.value.innerHTML = prettyPrintJson.toHtml(arr, {quoteKeys: true, trailingCommas: false})
  } else {
    jsonexample.value.innerHTML = '';
  }

  if(download) {
    const data = 'data:text/json;charset=utf-8,'+JSON.stringify(arr);
    const a = document.createElement("a");
    a.setAttribute("href", data);
    a.setAttribute('download', 'form.json');
    document.body.appendChild(a);
    a.click();
    a.remove();

  }
}
</script>

<template>
  <div class="col-start-2 col-span-6 flex flex-col gap-4 py-4">
    <div class="flex gap-2 items-end" v-for="(formField, index) in formStore.fields">
      <div class="field border border-gray-800 rounded-lg py-3 px-4 grow">
        <component class="grow" :is="formField.field" :name="'field_'+formField.index" :label="formField.label"
                   :index="formField.index"/>
        <hr class="my-4 bg-gray-800">
        <button @click="formStore.removeField(index)"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none">
          <Trash class="size-5 pe-0.5"/>
          Delete
        </button>
      </div>

    </div>
    <hr class="my-4 bg-gray-800">
    <div class="flex gap-4">
      <button @click="buildForm(false, true)" v-show="formStore.fields.length > 0"
              class="grow py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300">
        <Wrench/>
        Build
      </button>
      <button @click="buildForm(true, false)" v-show="formStore.fields.length > 0"
              class="grow py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300">
        <Eye/>
        Preview JSON
      </button>
    </div>

    <div v-show="formStore.fields.length === 0"
         class="bg-gray-100 border border-gray-200 text-sm text-gray-800 rounded-lg dark:bg-white/10 dark:border-white/20 dark:text-white"
         role="alert">

      <div class="flex p-4 gap-4 items-center">
        <Info/>
        <p>To start building your form select a field from the list on the left side on the screen</p>
      </div>
    </div>
  </div>
  <div class="col-start-9 col-span-4" v-show="showPreview">
    <h2 class="font-semibold text-xl pb-6">JSON</h2>
    <pre ref="jsonexample" class="json-container"></pre>
  </div>
</template>

<style scoped>

</style>