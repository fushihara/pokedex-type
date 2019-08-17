<template>
  <v-app dark>
    <!-- ↓左側から出てくるメニュー -->
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item @click.stop.prevent="xxx" ripple router exact>
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'履歴削除'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ↓画面の上にあるアプリバー -->
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <!-- ↓content-->
    <v-content>
      <v-container>
        <nuxt ref="main" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    xxx: function(v) {
      if (confirm("履歴を削除してよろしいですか？")) {
        const a = this.$refs.main.$children[0];
        a.removeFavorite();
      }
      this.drawer = false;
    }
  },
  data() {
    return {
      drawer: false,
      title: "ポケモン相性表"
    };
  }
};
</script>
