<template>
  <div class="flex flex-col p-8">
    <!-- <div class="px-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full "
        placeholder="Search for Ingredients"
      />
    </div> -->
    <RandomMeals/>



  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";
import RandomMeals from '../views/RandomMeals.vue';


//const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  //ingredients.value = (response.data)
});

</script>
