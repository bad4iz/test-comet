<template>
    <v-card>
        <v-toolbar color="green" dark>
            <v-toolbar-title>list: {{getList(id).name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab dark litle color="cyan"  @click="setCurrentComponentThis">
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
    methods:{
    setCurrentComponentThis: function () {
      this.$store.dispatch('setCurrentComponent', {name:this.$options.name, id:this.id})
    },
    // раскоментировать и проверить работу асинхр
    // card: function () {
    //   return getElement(this.id);
    // }
  }
  }
</script>

<style scoped>
    .v-card{
    }
</style>
