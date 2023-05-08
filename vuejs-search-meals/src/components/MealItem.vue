<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Salmon is the common name for several commercially important species of euryhaline
        ray-finned fish from the family Salmonidae.
      </p>
      <div class="flex item-center justify-between">
        <YouTubeButton :href="meal.strYoutube"> YouTube </YouTubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
