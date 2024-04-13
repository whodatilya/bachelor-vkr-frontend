<template>
  <div class="main__wrapper">
    <div class="flex flex-col">
      <div class="header flex flex-row justify-between p-6">
        <div class="flex flex-row gap-6">
          <span>Check semantic</span>
          <div class="h-full w-0.5" style="background: black"> </div>
          <div v-for="type in types" :key="type.id">
          <span
              class="cursor-pointer"
              :class="{'active' : selectedComponent === type.component}"
              @click="switchComponent(type.component)"
          >
            {{ type.title }}
          </span>
          </div>
        </div>
        <span class="cursor-pointer">
          Exit
        </span>
      </div>
      <div class="main-content">
        <component :is="selectedComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ByFile from '../components/ByFile.vue'
import ByDirectInput from '../components/ByDirectInput.vue'
import { reactive, ref } from "vue";

const selectedComponent = ref<any>(ByFile)

const types = reactive([
  {
    id: 0,
    title: 'by file',
    component: ByFile
  },
  {
    id: 1,
    title: 'by direct input',
    component: ByDirectInput
  }
])

const switchComponent = (component: any) => {
  selectedComponent.value = component
}
</script>

<style scoped lang="scss">
.main__wrapper {
  width: 90vw;
}

.header {
  border-radius: 40px 40px 0 0;
  background: white;
  font-size: 32px;
}

.active {
  color: #2C0AFF;
}

.main-content {
  background: #D9D9D9;
  padding: 3rem;
  border-radius: 0 0 40px 40px;
  mix-blend-mode: multiply;
}
</style>