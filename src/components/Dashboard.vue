<template>
    <v-layout row>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>MINI</span>
                <span class="font-weight-light"> {{getDashboard(this.id).name}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn flat target="_blank" @click="setCurrentComponentThis">
                <span class="mr-2">click me</span>
            </v-btn>
            <v-btn fab dark small color="cyan" @click="setCurrentComponentThis">
                <v-icon dark>edit</v-icon>
            </v-btn>
        </v-toolbar>
        <v-flex xs9>
            <v-layout row>
                <div v-for="(item) in getDashboard(this.id).lists" :key="item">
                    <list :id="item"/>
                </div>
            </v-layout>
        </v-flex>
        <v-flex xs3>
            <panel/>
        </v-flex>
    </v-layout>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "Dashboard",
    props: {
      id: {
        type: Number,
        default: 5,
      },
    },
    components: {
      list: () => import('../components/List'),
      panel: () => import('../components/Panel'),
    },
    data() {
      return {}
    },
    methods: {
      setCurrentComponentThis: function () {
        this.$store.dispatch('setCurrentComponent', {name: this.$options.name, id: this.id})
      }
    },
    computed: {
      ...mapGetters([
        // Mounts the "card" getter to the scope of your component.
        'getDashboard',
      ])
    },
  }
</script>

<style scoped>

</style>
