<template>
    <v-container>
        {{getCard(2)}}
    </v-container>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    data: () => ({}),
    computed: {
      ...mapGetters([
        // Mounts the "card" getter to the scope of your component.
        'getScore',
        'getCard'
      ])
    },
  }
</script>

<style>

</style>
