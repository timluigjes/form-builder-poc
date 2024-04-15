<script setup>
import Drawer from "@/components/Drawer.vue";
import Builder from "@/components/Builder.vue";
import {onMounted} from "vue";

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100)

})
</script>

<template>
  <div class="container mx-auto grid grid-cols-12">
    <Drawer/>
    <Builder/>
  </div>

</template>

<style scoped>

</style>
