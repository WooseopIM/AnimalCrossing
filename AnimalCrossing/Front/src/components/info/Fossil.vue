<template>
  <div>
    <v-text-field
      v-model="searchText"
      @keyup="filter"
      solo-inverted
      flat
      hide-details
      label="Search"
      class="nav-search"
    ></v-text-field>
    <div class="fossilCards">
      <!-- <h1>fish</h1> -->
      <infoCard
        v-for="infoCard in selectedCards"
        :key="infoCard.id"
        :infoCard="infoCard"
        :routePath="routePath"
      />
    </div>
  </div>
</template>

<script>
import { getFossils } from "@/api/info.js";
import infoCard from "./infoCard.vue";

export default {
  name: "fossil",
  components: {
    infoCard
  },
  methods: {
    filter() {
      let check = this.infoCards.filter(
        infoCard => infoCard.name.indexOf(this.searchText.trim()) !== -1
      );
      this.selectedCards = check;
    }
  },
  data() {
    return {
      infoCards: [],
      routePath: this.$route.path,
      selectedCards: [],
      searchText: ""
    };
  },
  async mounted() {
    this.infoCards = await getFossils(this.infoCards);
    this.selectedCards = this.infoCards;
  }
};
</script>

<style scoped>
.fossilCards {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem 1rem;
}
@media (max-width: 1600px) {
  .fossilCards {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem 0.4rem;
  }
}

@media (max-width: 1300px) {
  .fossilCards {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem 0.4rem;
  }
}

@media (max-width: 1100px) {
  .fossilCards {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem 0.4rem;
  }
}

@media (max-width: 900px) {
  .fossilCards {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem 0rem;
  }
}

@media (max-width: 560px) {
  .fossilCards {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 0rem;
  }
}
.v-text-field {
  width: 300px;
  background-color: rgba(173, 204, 245, 0.322);
  margin-bottom: 10px;
  margin-left: 35%;
  margin-right: 35%;
}
</style>
