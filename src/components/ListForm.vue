<template>
    <div class="a">
        <card/>
    </div>
</template>

<script>
    export default {
      name: "List",
      components: {
        card: () => import('../components/Card')
      }
    }
</script>

<style scoped>

</style>
