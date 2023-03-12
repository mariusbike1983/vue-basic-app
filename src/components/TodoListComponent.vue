<script setup lang="ts">
import { TodoItem } from '@/types/TodoItem';
import { computed } from 'vue';
import TodoItemComponent from './TodoItemComponent.vue';

const props = defineProps<{
    title: String
    data: TodoItem[]
    type: 'COMPLETED' | 'INPROGRESS'
}>();

const isCompletedList = computed(() => props.type === 'COMPLETED');

const emits = defineEmits<{
    (event: 'itemSelected', id: number): void
}>();

function onItemSelected(id: number): void {
    emits('itemSelected', id);
}

</script>

<template>
    <div 
        class="todo-list" 
        :class="{'completed-todo-list': isCompletedList}">
        <div class="todo-list-title"> {{ title }}</div>
        <TodoItemComponent 
            v-for="item in data" :key="item.id"

            :id = "item.id"
            :title = "item.text"
            :detail = "item.detail"
            :completed = "item.completed"
            @selected="onItemSelected"/>
    </div>
</template>

<style scoped lang="less">

.todo-list {
    min-height: 30px;

    color: black;
    background-color: cadetblue;

    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    
    display: flex;
    flex-direction: column;

    .todo-list-title {
        align-self: self-start;
    }
}

.completed-todo-list  {
    color: lightgray;
    background-color: blueviolet;
}
</style>