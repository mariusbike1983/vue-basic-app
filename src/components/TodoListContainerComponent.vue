<script setup lang="ts">
import { computed, ref } from 'vue';
import { TodoItem } from '@/types/TodoItem';
import Toolbar from './Toolbar.vue';
import TodoListComponent from './TodoListComponent.vue';
import Action from './Action.vue';

const props = defineProps<{
  title: String
  data: TodoItem[]
}>();

const elementsCompleted = computed(() => props.data.filter(item => item.completed) );
const elementsInProgress = computed(() => props.data.filter(item => !item.completed) );
const showCompletedItems = ref(true)
const removeCompletedDisabled = computed(() => elementsCompleted.value.length === 0)

const emits = defineEmits<{
  (event: 'todoItemChange', id: number): void
  (event: 'createNewItem'): void
  (event: 'removeItem', id: number): void
}>();

function onTodoListItemChange(id: number) {
  emits('todoItemChange', id);
}

function onRemoveItemAction() {
  emits('removeItem', elementsCompleted.value[0].id);
}

</script>

<template>
  <h1>{{ title }}</h1>
    <Toolbar>
      <slot>
        <Action 
          :text="'Add todo item'"
          :title="'Add todo item'"
          :icon="require('../../src/assets/add.png')"
          @action-execute="$emit('createNewItem')"/>
        <Action 
          :text="'Remove completed items'"
          :title="'Remove completed items'"
          :icon="require('../../src/assets/delete.png')"
          :disabled="removeCompletedDisabled"
          @action-execute="onRemoveItemAction"/>
        <Action 
          :text="showCompletedItems ? 'Hide completed items': 'Show completed items'"
          :title="showCompletedItems ? 'Hide completed items': 'Show completed items'"
          :icon="require('../../src/assets/'+(showCompletedItems ? 'hide.png': 'show.png'))"
          @action-execute="showCompletedItems = !showCompletedItems"/>
      </slot>
    </Toolbar>
    <div class="container">
      <TodoListComponent 
        :type="'INPROGRESS'"
        :title = "'Current todo items'"
        :data = elementsInProgress
        @item-selected = "onTodoListItemChange"/>
      <TodoListComponent v-if="showCompletedItems"
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

</style>
