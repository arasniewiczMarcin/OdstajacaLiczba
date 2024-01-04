<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const inputArray = ref('')


const findWantedNumber = (odd: number, numArray:number[]) => {
  const wantedNumber = numArray.find((num) => num % 2 == odd)
  return wantedNumber
}

const isWantedNumberOdd = (firstThreeNumArray:number[]) => {
  let oddCount = 0
    firstThreeNumArray.forEach((num)=>{
    if(num % 2 == 1) oddCount++
  })
  if(oddCount < 2) return true
  return false
}

const findDifferentNumber = (numArray: number[]) => {
  const firstThree = [numArray[0], numArray[1], numArray[2]]
  
  if(isWantedNumberOdd(firstThree)) return findWantedNumber(1, numArray)
  else return findWantedNumber(0, numArray)
  
}

const navigateToSecond = (message: number) => {
  router.push(`/second/${message}`)
  router.params = { message: message }
}

const handleButtonClick = (inputArray: string) => {
  const differentNumber = findDifferentNumber(inputArray.split(',').map((num) => parseInt(num))) 
      if (typeof differentNumber === 'number') navigateToSecond(differentNumber)
}

</script>

<template>
  
  <input v-model="inputArray" type="text" class="border-2 border-blue-300 p-2 rounded-md w-1/3"
    @keyup.enter="handleButtonClick(inputArray)" />
 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="handleButtonClick(inputArray)"
      >Find the different number</button>

  
</template>

<style scoped>
</style>
