<script setup lang="ts">

const props = defineProps({
  differentNumber: {
    type: [Number, String],
    default: undefined
  }
})

const { differentNumber } = props
const parsedMessage = Number(differentNumber)
</script>

<template>
  <div class="flex flex-col gap-8 items-center justify-center h-screen">
    <h1>The different number is: {{ parsedMessage }}</h1>
    <router-link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back
        </button>
    </router-link>
  </div>  
</template>

<style scoped>
</style>