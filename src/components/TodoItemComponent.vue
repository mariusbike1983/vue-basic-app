<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
    id:         number
    title:      string
    detail:     string
    completed:  boolean
}>();

const isItemCompleted = ref(props.completed)

//Why can't I use this in the :title binding?!?
//const showTitle = computed(() => { props.completed ? 'a' : 'b'})

defineEmits<{
    (event: 'selected', id: number): void
}>();

</script>

<template>
    <div 
        class="todo-item" 
        :class = "{ 'completed': isItemCompleted }"
        :title = "isItemCompleted ? 'Click to mark it in progress' : 'Click to mark it completed'"
        @click="$emit('selected', id)" 
    >
            <div> {{ title }}</div>
            <div class="detail"> {{ detail }}</div>
    </div>
</template>

<style scoped lang="less">

.todo-item {
    user-select: none;
    cursor: pointer;
    text-align: left;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: rgb(57, 60, 63);
    font-weight: 600;
    padding: 5px;
    margin: 5px;
    border: 2px solid green;
    border-radius: 10px;

    .detail {
      font-size: small;
      font-weight: 300;
      pointer-events: none;
    }

    &.completed {
        text-decoration: line-through;
    }

    &:hover {
        border-color: orange;
    }
}

</style>