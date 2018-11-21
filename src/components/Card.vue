<template>
    <v-card>
        <v-toolbar color="teal" dark>
            <v-toolbar-title>Card: {{getCard(id).name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab dark color="cyan" @click="setCurrentComponentThis">
                <v-icon dark>edit</v-icon>
            </v-btn>
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
    name: "Card",
    methods: {
      ...mapActions([]),
      setCurrentComponentThis: function () {
        this.$store.dispatch('setCurrentComponent', {name:this.$options.name, id:this.id})
      },
      // раскоментировать и проверить работу асинхр
      // card: function () {
      //   return getElement(this.id);
      // }
    }
    ,
    computed: {
      ...mapGetters([
          // Mounts the "card" getter to the scope of your component.
          'getCard'
        ]),
      card: function () {
        return getElement(this.id);
      }
    },
  }
</script>

<style scoped>
.v-card{
    width: 300px;
    margin: 10px;
}
</style>
