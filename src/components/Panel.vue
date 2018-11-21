<template>
    <div class="scene">
        <transition name="bounce" mode="out-in">
            <v-card :key="getCurrentComponent">
                <transition name="fade" mode="out-in">
                    <v-list :key="getCurrentId">
                        <component v-bind:is="getCurrentComponent" :id="getCurrentId"></component>
                    </v-list>
                </transition>
            </v-card>
        </transition>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Panel",
    components: {
      CardForm: () => import('@/components/CardForm'),
      DashboardForm: () => import('@/components/DashboardForm'),
      ListForm: () => import('@/components/ListForm')
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

    .bounce-enter-active {
        animation: bounce-in .5s;
        backface-visibility: hidden;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
        backface-visibility: hidden;
    }

    @keyframes bounce-in {
        0% {
            transform: rotateX(99deg);
            transform-style: preserve-3d;
        }
        100% {
            transform: rotateX(0deg);
            transform-style: preserve-3d;
        }
    }

    .fade-enter-active {
        animation: fade-in .5s;
    }
    .fade-leave-active {
        animation: fade-in .5s reverse;
    }
    @keyframes fade-in {
        0% {
            transform: scaleY(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    .scene {
        perspective: 600px;
    }
</style>
