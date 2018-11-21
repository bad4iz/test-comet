<template>
    <div>
        <v-card>
            <v-toolbar color="teal" dark>
                <v-toolbar-title>list</v-toolbar-title>
            </v-toolbar>


            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{list.name}}</h3>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>
        forma
        {{ list}}
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "ListForm",
    props: {
      id: {
        type: Number,
        default: 4,
      },
    },
    components: {},
    computed: {
      ...mapGetters([
        // Mounts the "card" getter to the scope of your component.
        'getList',
      ]),
      list: function () {
        return this.getList(this.id);
      }
    },
    methods: {
      // раскоментировать и проверить работу асинхр
      // card: function () {
      //   return getElement(this.id);
      // }
    }
  }
</script>

<style scoped>

</style>
