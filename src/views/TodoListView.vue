<script setup lang="ts">
import { TodoItem } from '@/types/TodoItem';
import TodoListContainerComponent from '../components/TodoListContainerComponent.vue';
import { ref } from 'vue';
import { produceNewItem } from '../data/loadData';
import { LoadingResult } from '@/types/LoadingResult';
import { removeItem } from '../data/loadDataExtern';

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

function toDoItemRemove(index: number) {
  if (index >= 0 && index < componentData.value.length) {
    const item = componentData.value[index];
    if (confirm("Will delete "+item.text)) {
      removeItem(item.id).then(result => {
        if (result) {
          componentData.value.splice(index, 1);
        } else {
          alert("Element could NOT be deleted");
        }
      })
    }else {
      alert("not deleted");
    }
  }
}

</script>

<template>
  <div class="home">
    <TodoListContainerComponent
      :title = "'This is the todo-list'"
      :data = "componentData"
      @todo-item-change="toDoItemChange"
      @remove-item="toDoItemRemove"
      @create-new-item="addNewItem"/>
  </div>
</template>