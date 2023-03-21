<script setup lang="ts">
import { TodoItem } from '@/types/TodoItem';
import TodoListContainerComponent from '../components/TodoListContainerComponent.vue';
import EditTodoItemComponent from '@/components/EditTodoItemComponent.vue';
import { ref } from 'vue';
import { LoadingResult } from '@/types/LoadingResult';
import { removeItem } from '../data/loadDataExtern';

const componentData = ref(((window as any).data as LoadingResult).todoitems);
const selectedItemId = ref(-1);

function onAddNewItem() {
  const id = componentData.value.length + 1;
  selectedItemId.value = id;
}

// function addNewItem() {
//   const id = componentData.value.length + 1;
//   componentData.value.push(new TodoItem(id, "Text for "+id, "Detail for "+id, false));
// }

function onCommitEditItem(text: string, detail: string, completed: boolean){
  componentData.value.push(new TodoItem(selectedItemId.value, text, detail, completed));
  selectedItemId.value = -1;
}

function toDoItemChange(id: number) {
  for(let i = 0; i < componentData.value.length; i++) {
    const item = componentData.value[i];
    if (item.id === id) {
      item.completed = !item.completed;
      break;
    }
  }
}

function toDoItemRemove(id: number) {
  for(let i = 0; i < componentData.value.length; i++) {
      const item = componentData.value[i];
      if (item.id === id) {
        if (confirm("Will delete "+item.text)) {
          removeItem(item.id).then(result => {
            if (result) {
              componentData.value.splice(i, 1);
            } else {
              alert("Element could NOT be deleted");
            }
          })
        }else {
          alert("not deleted");
        }
        break;
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
      @create-new-item="onAddNewItem"/>
    <Teleport to="#app">
      <EditTodoItemComponent  
        v-show="selectedItemId >= 0"
        :selected-id="selectedItemId"
        @commit="onCommitEditItem"
        @cancel="selectedItemId = -1"/>
    </Teleport>
  </div>
</template>