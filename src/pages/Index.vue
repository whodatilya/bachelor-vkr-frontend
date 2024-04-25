<template>
  <div class="main__wrapper">
    <div class="flex flex-col py-4">
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
        <span @click="handleLogout" class="cursor-pointer">
          Exit
        </span>
      </div>
      <div class="main-content flex flex-col">
        <component :is="selectedComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ByFile from '../components/ByFile.vue'
import ByDirectInput from '../components/ByDirectInput.vue'
import { reactive, ref } from "vue";
import { useAuthStore } from "../store/auth/useAuthStore.ts";

const selectedComponent = ref<unknown>(ByFile)

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

const { logout } = useAuthStore()

const handleLogout = () => {
  logout()
}

const switchComponent = (component: unknown) => {
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
  min-height: 80vh;
  padding: 3rem;
  border-radius: 0 0 40px 40px;
}
</style>