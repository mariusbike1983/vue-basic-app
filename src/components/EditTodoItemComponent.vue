<script setup lang="ts">
import { LoadingResult } from '@/types/LoadingResult';
import { TodoItem } from '@/types/TodoItem';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  selectedId: number
}>();

defineEmits<{
  (event: 'commit', _text: string, _detail: string, _completed: false): void;
  (event: 'cancel'): void;
}>();

const item = computed<TodoItem>(() => ((window as any).data as LoadingResult).todoitems.find(item => item.id === props.selectedId) as TodoItem);

const _text = ref("");
const _detail = ref("");
const _completed = ref(false);

watch(item, (newValue) => {
  if (newValue !== undefined) {
    _text.value = newValue.text;
    _detail.value = newValue.detail;
    _completed.value = newValue.completed;
  }
})

</script>

<template>
    <div class="edit-window">
      <div class="values">
        <span>Text: </span> <input v-model="_text">
        <span>Detail: </span> <input v-model="_detail">
        <span>Completed: </span> <input type="checkbox" v-model="_completed">
      </div>
      <div class="buttons">
        <button @click="$emit('commit', _text, _detail, _completed)">Save</button>
        <button @click="$emit('cancel')">Cancel</button>
      </div>
    </div>
</template>

<style scoped lang="less">

.edit-window {
  width: 300px;
  height: 300px;
  background-color: lightgrey;
  border: 1px solid black;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  box-shadow: 5px 5px 5px gray;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .values {
    display: grid;
    gap: 2px;
    grid-template-columns: auto auto;
  }

  .buttons {
    margin-top: auto;
    align-self: flex-end;
    display: flex;
    gap: 5px;
  }
}

</style>