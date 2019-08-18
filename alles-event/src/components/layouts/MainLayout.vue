<template>
  <v-app id="inspire">
    
    <NavigationDrawer></NavigationDrawer>

    <AppBar></AppBar>

    <v-content>
      <v-container class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from './NavigatonDrawer';
import AppBar from './AppBar';

export default {
  components:{
    NavigationDrawer,
    AppBar
  },
  created() {
    // this.$vuetify.theme.dark = true;
  }
};
</script>