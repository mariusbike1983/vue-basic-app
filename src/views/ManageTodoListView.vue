<script setup lang="ts">
import { LoadingResult } from '@/types/LoadingResult';
import Toolbar from '@/components/Toolbar.vue';
import Action from '@/components/Action.vue';
import { ref } from 'vue';

const componentData = ref(((window as any).data as LoadingResult).todoitems);
const editWindowVisible = ref(false);

function onAddNewItem() {
  alert("Will add a new item");
}

function onEditItem(id: number) {
  editWindowVisible.value = true;
}

function onRemoveItem(id: number) {
  alert("Will remove item with id "+id);
}

</script>
<template>
  <div class="view-manage-todo-lists">
    <h1>Manage to-do list</h1>
    <br>
    <Toolbar>
      <slot>
        <Action 
          :text="'Add todo item'"
          :title="'Add todo item'"
          :icon="require('../../src/assets/add.png')"
          @action-execute="onAddNewItem"/>
      </slot>
    </Toolbar>
    <table>
      <thead>
        <th class="itemText">Text</th>
        <th class="detail">Detail</th>
        <th class="completed">Completed</th>
        <th class="actions">Actions</th>
      </thead>
      <tbody>
        <tr v-for="item in componentData" :key="item.id" style="height:20px">
          <td class="itemText">{{ item.text }}</td>
          <td class="detail">{{ item.detail }}</td>
          <td class="completed">
            <input type="checkbox" :checked="item.completed" v-model="item.completed" :id="''+item.id">
          </td>
          <td class="actions">
            <div class="actions-container">
              <Action
                :title="'Edit the item'" 
                :icon="require('../../src/assets/edit.png')"
                @action-execute="onEditItem(item.id)"
              />
              <Action
                :title="'Remove the item'"
                :icon="require('../../src/assets/delete.png')"
                @action-execute="onRemoveItem(item.id)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Teleport to="body">
      <div 
        v-show="editWindowVisible" 
        class="edit-window"
        @click="editWindowVisible = !editWindowVisible">
      </div>
    </Teleport>
  </div>
</template>

<style scoped lang="less">

table, th, td {
  border: 1px solid black;
}

th {
  background-color: lightblue;
}

.completed {
  width: 100px;
  input {
    cursor: pointer;
  }
}

.actions {
    width: calc(30%);
  .actions-container {
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
}

tr:nth-child(even) {
  background-color:rgba(128, 128, 128, 0.1);
}

tr:hover {
  background-color:rgba(250, 128, 114, 0.2); // salmon
}

table {
  max-height: 300px;
  overflow-y: auto;
  display: block;
  width: 100%;
}

.edit-window {
  width: 300px;
  height: 300px;
  background-color: lightgray;
  border: 1px solid black;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  box-shadow: 5px 5px 5px gray;
}

</style>
