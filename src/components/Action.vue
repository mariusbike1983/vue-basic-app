<template>
    <div class="action"
        @click="$emit('action-execute')">
        <img v-if="icon" class="icon" :src="icon"/>
        <span>{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text: string
    icon?: string
}>();

defineEmits<{
    (event: "action-execute"): void
}>();
</script>

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

    &:hover {
      background-color: salmon;
      border-color: white;
      color: black;
    }

    .icon {
      padding-right: 2px;
      padding-left: 2px;
    }
  }
</style>