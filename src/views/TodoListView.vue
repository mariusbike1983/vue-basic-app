<script setup lang="ts">
import { TodoItem } from '@/types/TodoItem';
import TodoListContainerComponent from '../components/TodoListContainerComponent.vue';
import { ref } from 'vue';
import { produceNewItem } from '../data/loadData';
import { LoadingResult } from '@/types/LoadingResult';

const componentData = ref(((window as any).data as LoadingResult).todoitems);

function toDoItemChange(id: number) {
  for(let i = 0; i < componentData.value.length; i++) {
    const item = componentData.value[i];
    if (item.id === id) {
      item.completed = !item.completed;
      break;
    }
  }
}

function addNewItem() {
  let newTodoItem : TodoItem = produceNewItem(componentData.value.length + 1);
  componentData.value.push(newTodoItem);
}

</script>

<template>
  <div class="home">
    <TodoListContainerComponent
      :title = "'This is the todo-list'"
      :data = "componentData"
      @todo-item-change="toDoItemChange"
      @create-new-item="addNewItem"/>
  </div>
</template>