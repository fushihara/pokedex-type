<template>
  <div class="container">
    <div>
      <div style="width:100%;overflow-x:auto;">
        <keyboard ref="keyboardUi" @input="keyboardChange" />
      </div>
      <div style="text-align:center;">絞り込み結果リスト</div>
      <div class="poke-list">
        <transition-group tag="div" name="vue-anime-list">
          <pokemon-li
            v-for="d in filterdPokemonList"
            v-bind:key="d.name"
            v-bind:pokemonData="d"
            v-on:click="pokeClick"
          ></pokemon-li>
        </transition-group>
      </div>
      <div style="text-align:center;">お気に入り結果</div>
      <div class="poke-list">
        <transition-group tag="div" name="vue-anime-list">
          <pokemon-li
            v-for="d in favoritePokeList"
            v-bind:key="d.name"
            v-bind:pokemonData="d"
            v-on:click="pokeClick"
          ></pokemon-li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from '~/components/Logo.vue'
import Keyboard from "~/components/Keyboard.vue";
import PokemonLi from "~/components/PokemonLi.vue";
import PokedexA from "~/assets/pokedexA.json";
import { getContainChars } from "~/assets/stringUtils";
import { 技の効き目を取得 } from "~/assets/typeDefs";
import { addSave, getSaveList, clearSaveList } from "~/assets/localStorageUtil";
import { PokemonSprites } from "~/assets/pokemonSprites.ts"

const PokedexOriginal = PokedexA.map(a => {
  const imageBase64string = PokemonSprites.find(b => b.id == a.id)!.imageData;
  return Object.assign(a, { usingChars: getContainChars(a.name), 技の効き目: 技の効き目を取得(a.types as any), imageBase64string })
})
export default Vue.extend({
  components: {
    Logo,
    Keyboard,
    PokemonLi
  },
  methods: {
    keyboardChange: function (data) {
      this.keyboardInputString = data;
    },
    pokeClick: function (data) {
      (this.$refs.keyboardUi as any).inputClear();
      addSave(data.name);
      const result: any = [];
      for (let v of getSaveList()) {
        const a = PokedexOriginal.find(a => a.name == v);
        if (a) {
          result.push(a);
        }
      }
      this.favoritePokeList = result;
    },
    removeFavorite: function () {
      (this.$refs.keyboardUi as any).inputClear();
      clearSaveList();
      this.favoritePokeList = [];
    }
  },
  data: function () {
    return {
      PokedexA,
      keyboardInputString: "",
      favoritePokeList: []
    };
  },
  mounted: function () {
    const result: any = [];
    for (let v of getSaveList()) {
      const a = PokedexOriginal.find(a => a.name == v);
      if (a) {
        result.push(a);
      }
    }
    this.favoritePokeList = result;
  },
  computed: {
    filterdPokemonList: function () {
      if (this.keyboardInputString == "") {
        if (this.$refs.keyboardUi) {
          (this.$refs.keyboardUi as any).updateEnableCharList(null);
        }
        return [];
      } else {
        const inputCharList: string[] = Array.from(this.keyboardInputString);//絞り込みをしている文字の一覧
        const 入力可能な文字の一覧: string[] = [];
        const result = PokedexOriginal.filter(pokemon => {
          return inputCharList.every(inputChar => pokemon.usingChars.includes(inputChar))
        });
        for (let r of result) {
          for (let s of r.usingChars) {
            if (入力可能な文字の一覧.includes(s) == false && inputCharList.includes(s) == false) {
              入力可能な文字の一覧.push(s);
            }
          }
        }
        if (this.$refs.keyboardUi) {
          (this.$refs.keyboardUi as any).updateEnableCharList(入力可能な文字の一覧);
        }
        return result;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.poke-list > div {
  > * {
    border-bottom: solid 1px black;
  }
  > *:last-child {
    border-bottom: 0;
  }
}
// https://nujawak.online/blog/247/
.vue-anime-list {
  &-enter-active {
    opacity: 0;
    transform: translateX(50px);
    transition: {
      property: transform, opacity;
      duration: 0.6s;
      timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      delay: 0s;
    }
  }
  &-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  &-leave-active {
    opacity: 1;
    transform: translateX(0);
    transition: {
      property: transform, opacity;
      duration: 0.6s;
      timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      delay: 0s;
    }
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
  &-move {
    transition: {
      property: transform;
      duration: 0.6s;
      timing-function: cubic-bezier(0.77, 0, 0.175, 1);
      delay: 0s;
    }
  }
}
</style>
