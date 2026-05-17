<script setup>
import CardSeasons from "../components/CardSeasons.vue";
import { onMounted, ref } from "vue";

let cards = ref([
  {
    img: "",
    title: "заголовок",
    desc: "описание",
  },
  {
    img: "",
    title: "заголовок",
    desc: "описание",
  },
]);
</script>

<template>
  <section>
    <CardSeasons v-for="(card, i) in cards" :key="i" :card="card" />
  </section>
</template>

<style scoped>
section {
  display: grid;
  gap: 40px;
}
</style>
