<template>
    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="updateAppDrawer(!appDrawer)"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Alles</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as AppMutations from './../../store/application/application-store-mutation';

export default {
    computed: {
        ...mapGetters('application', [
            'appDrawer'
        ])
    },
    methods: {
        ...mapActions('application', {
            updateAppDrawer: AppMutations.UPDATE_APP_DRAWER
        })
    }
}
</script>