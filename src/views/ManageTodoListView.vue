<script setup lang="ts">import { LoadingResult } from '@/types/LoadingResult';
import { TodoItem } from '@/types/TodoItem';
import Toolbar from '@/components/Toolbar.vue';
import Action from '@/components/Action.vue';
import { computed, ref } from 'vue';

const componentData = ref(((window as any).data as LoadingResult).todoitems);

</script>
<template>
  <div class="view-manage-todo-lists">
    <h1>Manage to-do list</h1>

    <br>
    <Toolbar>
      <template v-slot:actionscontainer>
        <Action 
          :text="'Add todo item'"
          :icon="require('../../src/assets/add.png')"
          @action-execute="$emit('createNewItem')"/>
      </template>
    </Toolbar>
    <table>
      <thead>
        <th class="itemText">Text</th>
        <th class="detail">Detail</th>
        <th class="completed">Completed</th>
        <th class="actions">Actions</th>
      </thead>
      <tbody>
      <tr v-for="item in componentData" :key="item.id">
        <td class="itemText">{{ item.text }}</td>
        <td class="detail">{{ item.detail }}</td>
        <td class="completed">
          <input type="checkbox" :checked="item.completed" v-model="item.completed" :id="''+item.id">
        </td>
        <td class="actions">
          
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<style scoped lang="less">

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  background-color: lightblue;
}

.completed {
  width: 100px;
}

.actions {
  width: calc(30%);
}

tr:nth-child(odd) {
  background-color: lightgrey;
}

table {
  max-height: 300px;
  overflow-y: auto;
  display: block;
  width: 100%;
}

</style>
