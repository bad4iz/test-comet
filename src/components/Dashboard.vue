<template>
    <v-layout row>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>MINI</span>
                <span class="font-weight-light"> Kanbanchi</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    flat
                    target="_blank"
            >
                <span class="mr-2">click me</span>
            </v-btn>
        </v-toolbar>
        <v-flex xs9>
            <v-layout row>
                <list/>
            </v-layout>
        </v-flex>
        <v-flex xs3>
            <v-card>
                <v-toolbar color="teal" dark>
                    <v-toolbar-title>Topics</v-toolbar-title>
                </v-toolbar>
                <v-list>
                    <div>card</div>
                    <div>card</div>
                  
                </v-list>

            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: "Dashboard",
    components: {
      list: () => import('../components/List')
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
