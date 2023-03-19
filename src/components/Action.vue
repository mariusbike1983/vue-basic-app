<script setup lang="ts">
defineProps<{
    text?: string
    icon?: string
    title: string
}>();

defineEmits<{
    (event: "action-execute"): void
}>();
</script>

<template>
  <button class="action"
      @click="$emit('action-execute')"
      :title="title">
      <img v-if="icon" class="icon" :src="icon"/>
      <span v-if="text">{{ text }}</span>
  </button>
</template>

<style scoped lang="less">
  .action {
    align-self: end;
    background-color: transparent;
    color: black;
    
    text-align: center;
    border: none;
    cursor: pointer;
    user-select: none;
    padding: 2px;
    display: flex;

    &:hover:not(:disabled) {
      background-color: salmon;
      border-color: none;
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