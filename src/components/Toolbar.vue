<script setup lang="ts">

</script>

<template>
    <div class="toolbar">
        <div class="actions-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="less">

.toolbar {
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  padding: 2px;
  user-select: none;
  border: 1px solid black;

  .title {
    align-self: start;
    width: auto;
  }

  .actions-container {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
}

</style>