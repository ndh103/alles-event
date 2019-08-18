<template>
  <v-navigation-drawer v-model="appDrawerModel" app clipped>
    <v-list dense>
      <v-list-item v-for="item in menuItems" :key="item.text">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon color="grey darken-1">settings</v-icon>
        </v-list-item-action>
        <v-list-item-title class="grey--text text--darken-1">Settings</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import * as AppMutationTypes from './../../store/application/application-store-mutation';

export default {
  data: () => ({
    menuItems: [
      { icon: "trending_up", text: "Todo" },
      { icon: "subscriptions", text: "Finisher lists" },
      { icon: "history", text: "Habits" },
      { icon: "featured_play_list", text: "Calendar" }
    ]
  }),
  methods: {
      ...mapActions('application', {
          updateAppDrawer : AppMutationTypes.UPDATE_APP_DRAWER
        })
  },
  computed: {
      ...mapGetters('application',[
          'appDrawer'
      ]),
      appDrawerModel: {
          get(){
              return this.appDrawer;
          },
          set(value){
              this.updateAppDrawer(value);
          }
      }
  }
};
</script>