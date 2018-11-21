<template>
    <div>
        <v-card>
            <v-toolbar color="teal" dark>
                <v-toolbar-title>Topics</v-toolbar-title>
            </v-toolbar>


            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{getCard(id).name}}</h3>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>
        forma
        {{ getCard(id)}}
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    props: {
      id: {
        type: Number,
        default: 1,
      },
    },
    name: "CardForm",
    methods: {
      ...mapActions([]),
    }
    ,
    computed: {
      ...mapGetters([
          // Mounts the "card" getter to the scope of your component.
          'getCard'
        ])
    }
  }
</script>

<style scoped>

</style>
