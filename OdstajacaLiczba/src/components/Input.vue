<script setup lang="ts">
import { ref } from 'vue'

const inputArray = ref('')

const findWantedNumber = (odd: number, numArray:number[]) =>{
  
  const wantedNumber = numArray.find((num) => num % 2 == odd)
  console.log(wantedNumber)
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
  if(numArray.length < 3) return "Array does not contain 3 numbers"
   //sprawdzenie 3 pierwszych liczb
  const firstThree = [numArray[0], numArray[1], numArray[2]]
  
  if(isWantedNumberOdd(firstThree)) return findWantedNumber(1, numArray)
  else return findWantedNumber(0, numArray)
  
}

</script>

<template>
  
  <input v-model="inputArray" type="text" class=" border-2 border-gray-300 p-2 rounded-md w-1/2" />
  <button class="border-2 border-gray-300 p-2 rounded-md w-1/6" @click="findDifferentNumber(inputArray.split(',').map((num)=>parseInt(num)))">Wyszukaj</button>
  
</template>

<style scoped>
</style>
