<template>
  <div class="flex flex-col gap-6 flex-1">
    <div class="check-form flex flex-col justify-between">
      <div class="flex flex-col">
        <span class="fs-32 mb-1">Validate by direct input</span>
        <hr>
        <span class="fs-12 mt-1 mb-4">Enter the Markup to validate:</span>
        <textarea class="input-textarea mb-4" name="layout" cols="30" rows="10" v-model="markup"/>
        <button @click="onClickSubmit" class="button">Submit</button>
      </div>
    </div>
    <div class="check-form flex-1 flex flex-col gap-2">
      <span class="fs-32">Score: {{ score }}</span>
      <span>Result:</span>
      <textarea readonly class="output-textarea" name="layout" cols="30" rows="10" v-model="htmlContent"/>
      <span>Errors:</span>
      <div class="scroll-block max-h-full flex flex-col">
        <template v-for="(error, index) in errors" :key="index">
          <span>{{ index }} - {{ error }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ApiResponse } from "../types";
import { useProcessHTMLStore } from "../store/process/useProcessHTMLStore.ts";

const response = ref<ApiResponse | null>(null)

const markup = ref<string | null>(null)

const { uploadByDirectInput } = useProcessHTMLStore()

const onClickSubmit = async () => {
  response.value = await uploadByDirectInput(markup.value)
}

const score = computed(() => response.value ? `${(response.value?.score * 100).toFixed(2)}%` : '')

const htmlContent = computed(() => response.value?.corrected_html)

const errors = computed(() => response.value?.errors)
</script>

<style scoped lang="scss">
.check-form {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
}

.button {
  background: #D9D9D9;
  border-radius: 8px;
  width: 150px;
  height: 32px;
  mix-blend-mode: multiply;
}

.input-textarea {
  padding: 8px;
  border: 2px solid #D9D9D9;
  resize: vertical;
  height: 120px;
  border-radius: 8px;
  outline: none;
}

.output-textarea {
  padding: 8px;
  border: 2px solid #D9D9D9;
  resize: none;
  border-radius: 8px;
  outline: none;
}
.scroll-block {
  overflow: auto;
}
</style>