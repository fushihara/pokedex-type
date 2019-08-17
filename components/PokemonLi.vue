<template>
  <button style="width:100%;background:white;" v-on:click="onClick">
    <div class="root">
      <div class="left">
        <img :src="pokemonData.imageBase64string" style="width:80px;height:80px;image-rendering: pixelated;" />
        <div>{{pokemonData.name}}</div>
      </div>
      <div class="x4" v-if="pokemonData.技の効き目.x4.length != 0">
        <div class="scale">x4</div>
        <div class="icon-list">
          <type-elem v-for="waza in pokemonData.技の効き目.x4" v-bind:key="waza" v-bind:taipu="waza"></type-elem>
        </div>
      </div>
      <div class="x2" v-if="pokemonData.技の効き目.x2.length != 0">
        <div class="scale">x2</div>
        <div class="icon-list">
          <type-elem v-for="waza in pokemonData.技の効き目.x2" v-bind:key="waza" v-bind:taipu="waza"></type-elem>
        </div>
      </div>
      <div class="x1_2" v-if="pokemonData.技の効き目.x1_2.length != 0">
        <div class="scale">x1/2</div>
        <div class="icon-list">
          <type-elem v-for="waza in pokemonData.技の効き目.x1_2" v-bind:key="waza" v-bind:taipu="waza"></type-elem>
        </div>
      </div>
      <div class="x1_4" v-if="pokemonData.技の効き目.x1_4.length != 0">
        <div class="scale">x1/4</div>
        <div class="icon-list">
          <type-elem v-for="waza in pokemonData.技の効き目.x1_4" v-bind:key="waza" v-bind:taipu="waza"></type-elem>
        </div>
      </div>
      <div class="x0" v-if="pokemonData.技の効き目.x0.length != 0">
        <div class="scale">x0</div>
        <div class="icon-list">
          <type-elem v-for="waza in pokemonData.技の効き目.x0" v-bind:key="waza" v-bind:taipu="waza"></type-elem>
        </div>
      </div>
    </div>
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
import TypeElem from "~/components/type.vue";
export default Vue.extend({
  components: {
    TypeElem
  },
  props: {
    pokemonData: Object
  },
  data: function () {
    return {
      inputedString: "",
    }
  },
  mounted: function () {
  },
  methods: {
    updateEnableCharList: function (charList: string[] | null) {
    },
    onClick: function (a) {
      this.$emit("click", this.pokemonData);
    }
  },
})
</script>

<style lang="scss" scoped>
.root {
  display: grid;
  grid-template-columns: 100px 1fr;
  color: black;
  font-weight: normal;
  > .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row: 1/6;
    grid-column: 1;
  }
  > .x4 {
    background: #f3d6d6;
    grid-row: 1;
    grid-column: 2;
  }
  > .x2 {
    background: #e4d6f3;
    grid-row: 2;
    grid-column: 2;
  }
  > .x1_2 {
    grid-row: 3;
    grid-column: 2;
  }
  > .x1_4 {
    grid-row: 4;
    grid-column: 2;
  }
  > .x0 {
    grid-row: 5;
    grid-column: 2;
  }
  > .x4,
  .x2,
  .x1_2,
  .x1_4,
  .x0 {
    display: grid;
    grid-template-columns: 40px 1fr;
    > .icon-list {
      display: flex;
      flex-wrap: wrap;
      padding: 2px 0;
    }
  }
}
</style>
