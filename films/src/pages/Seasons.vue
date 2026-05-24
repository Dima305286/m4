<script setup>
import CardSeasons from "../components/CardSeasons.vue";
import { onMounted, ref } from "vue";

let cards = ref([]);

async function GetData(){
  let data = await fetch("https://acd05b4e4a8e59ff.mokky.dev/seasons")
  cards.value = await data.json()
}

onMounted(GetData)
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
