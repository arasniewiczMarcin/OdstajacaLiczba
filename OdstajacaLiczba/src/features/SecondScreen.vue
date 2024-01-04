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
    <div class="border-2 border-cyan-600 p-2 rounded-md w-1/3">The different number is: {{ parsedMessage }}</div>
    <router-link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back
        </button>
    </router-link>
  </div>  
</template>

<style scoped>
</style>