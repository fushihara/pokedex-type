<template>
  <div style="margin:0 5px;">
    <div class="root" v-bind:style="{background:backgroundColor,color:fontColor}" style="padding:1px 5px;border-radius:5px;">{{typeLabel}}</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { typeDefs } from '../assets/typeDefs';

export default Vue.extend({
  props: {
    taipu: String
  },
  data: function () {
    return {
      typeLabel: typeDefs.find(a=>a.防御側タイプ == this.taipu)!.日本語表記,
      backgroundColor:typeDefs.find(a=>a.防御側タイプ == this.taipu)!.色,
      fontColor:typeDefs.find(a=>a.防御側タイプ == this.taipu)!.文字色,
    }
  },
  mounted: function () {
  },
  methods: {
  },
})
</script>

<style lang="scss" scoped>
.root{
  font-size:13px;
}
</style>
