<template>
    <v-card>
        <v-toolbar color="green" dark>
            <v-toolbar-title>list: {{getList(this.id).name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab dark color="cyan" >
                <v-icon dark>edit</v-icon>
            </v-btn>
        </v-toolbar>



        <v-list v-for="(item) in getList(this.id).cards" :key="item">
            <card :id="item"/>
        </v-list>
    </v-card>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    props: {
      id: {
        type: Number,
        default: 4,
      },
    },
    name: "List",
    components: {
      card: () => import('../components/Card')
    },
    computed: {
      ...mapGetters([
        // Mounts the "card" getter to the scope of your component.
        'getList',
      ])
    },
  }
</script>

<style scoped>
    .v-card{
    }
</style>
