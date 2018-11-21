<template>
    <v-card>
        <v-list>
            <component v-bind:is="getCurrentComponent" :id="getCurrentId"></component>
        </v-list>
    </v-card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "Panel",
    components: {
      CardForm: ()=> import('@/components/CardForm'),
      DashboardForm: ()=> import('@/components/DashboardForm')
    },
    computed: {
      ...mapGetters([
       'getCurrentComponent',
       'getCurrentId',
      ])
    },
  }
</script>

<style scoped>

</style>
