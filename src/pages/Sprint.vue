<template>
  <div>
    <h1>Sprint</h1>
    <div class="boards">
      <div class="board">
        <h3>Todo</h3>
        <draggable
            class="board-group"
            :list="list1"
            group="people"
            @change="log"
            itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="board-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>

      <div class="board">
        <h3>Progress</h3>
        <draggable
            class="board-group"
            :list="list2"
            group="people"
            @change="log"
            itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="board-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>

      <div class="board">
        <h3>Test</h3>
        <draggable
            class="board-group"
            :list="list3"
            group="people"
            @change="log"
            itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="board-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>

      <div class="board">
        <h3>Done</h3>
        <draggable
            class="board-group"
            :list="list4"
            group="people"
            @change="log"
            itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="board-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "sprint-page",
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      list3: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list4: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
}
</script>

<style scoped>
  .boards {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .board {
    width: 23%;
    margin: 0 1%;
  }

  .board-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
    min-height: 20px;
    background: #d3c7c7;
  }

  .board-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
  }
</style>