<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-orange-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full "
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
<!-- <pre>{{ meals }}</pre> -->
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import store from "../store";
import Meals from '../components/Meals.vue';
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
  } else{
    store.commit("setSearchMeals", []);
  }

}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
