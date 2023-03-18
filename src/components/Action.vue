<script setup lang="ts">
defineProps<{
    text: string
    icon?: string
}>();

defineEmits<{
    (event: "action-execute"): void
}>();
</script>

<template>
  <button class="action"
      @click="$emit('action-execute')">
      <img v-if="icon" class="icon" :src="icon"/>
      <span>{{ text }}</span>
  </button>
</template>

<style scoped lang="less">
  .action {
    align-self: end;
    background-color: slategray;
    color: antiquewhite;
    
    text-align: center;
    border: 2px solid green;
    cursor: pointer;
    user-select: none;
    padding: 2px;
    display: flex;

    &:hover:not(:disabled) {
      background-color: salmon;
      border-color: white;
      color: black;
    }

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }

    .icon {
      padding-right: 2px;
      padding-left: 2px;
    }

    span {
      height: 20px;
      line-height: 20px;
    }
  }
</style>