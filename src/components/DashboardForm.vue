<template>
    <div>
        <v-card>
            <v-toolbar color="red" dark>
                <v-toolbar-title>Dashboard</v-toolbar-title>
            </v-toolbar>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{dashboard.name}}</h3>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "DashboardForm",
    props: {
      id: {
        type: Number,
        default: 5,
      },
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        // Mounts the "card" getter to the scope of your component.
        'getElement'
      ]),
      dashboard: function () {
        return this.getElement(this.id);
      }
    },
  }
</script>

<style scoped>

</style>
