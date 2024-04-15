<script setup>
import {reactive, ref} from "vue";
import Text from "./fields/Text.vue";
import File from "./fields/File.vue";
import {useFormStore} from "@/store/form.js";
import {TextCursorInput, PanelBottomDashed, Upload} from "lucide-vue-next";
import Textarea from "@/components/fields/Textarea.vue";

let components = ref([
  {name: 'text', component: Text, icon: TextCursorInput},
  {name: 'textarea', component: Textarea, icon: PanelBottomDashed},
  {name: 'file', component: File, icon: Upload},
]);

const formStore = useFormStore();

</script>

<template>
  <div id="docs-sidebar"
       class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
      <ul class="space-y-1.5 flex gap-2 flex-col">
        <li v-for="fieldComponent in components">
          <button @click="formStore.addField(fieldComponent.component)"
                  class="w-full flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                  href="#">
            <component :is="fieldComponent.icon" class="size-4"/>
            {{ fieldComponent.name }}
          </button>
        </li>

      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>