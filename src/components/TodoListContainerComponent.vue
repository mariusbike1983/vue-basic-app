<script setup lang="ts">
import { computed, ref } from 'vue';
import { TodoItem } from '@/types/TodoItem';
import TodoListComponent from './TodoListComponent.vue';
import Action from './Action.vue';

const props = defineProps<{
  title: String
  data: TodoItem[]
}>();

const elementsCompleted = computed(() => props.data.filter(item => item.completed) );
const elementsInProgress = computed(() => props.data.filter(item => !item.completed) );

const emits = defineEmits<{
  (event: 'todoItemChange', id: number): void
  (event: 'createNewItem'): void
  (event: 'removeItem', id: number): void
}>();

function onTodoListItemChange(id: number): void {
  emits('todoItemChange', id);
}

function onRemoveItemAction(): void {
  // TODO: must determine which element is selected!!
  emits('removeItem', 0);

}
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="container">
      <div class="toolbar">
        <div class="actions-container">
          <Action 
            :text="'Add todo item'"
            :icon="require('../../src/assets/add.png')"
            @action-execute="$emit('createNewItem')"/>
          <Action 
            :text="'Remove selected items'"
            :icon="require('../../src/assets/remove.png')"
            @action-execute="onRemoveItemAction"/>
        </div>
      </div>
      <TodoListComponent 
        :type="'INPROGRESS'"
        :title = "'Current todo items'"
        :data = elementsInProgress
        @item-selected = "onTodoListItemChange"/>
      <TodoListComponent 
        :type ="'COMPLETED'"
        :title = "'Completed todo items'"
        :data = elementsCompleted
        @item-selected = "onTodoListItemChange"/>
  </div>
</template>

<style scoped lang="less">

.container {
  border: 1px solid black;
}

.toolbar {
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  padding: 2px;
  user-select: none;
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
