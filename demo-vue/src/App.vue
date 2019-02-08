<template>
  <se-app>
      <se-header v-bind:app-title="appInformation"></se-header>
      <se-navbar color="primary">
        <nav slot="start">Tenant: <a class="dropdown"> test </a></nav>
        <nav><a class="active">Home</a> <a>Components</a> <a>Icons</a></nav>
      </se-navbar>
      <se-widget-container>
        <se-widget>
          <se-widget-header>Filter from VUE</se-widget-header>
          <se-widget-content>
              <div class="mycoolstyle">my content</div>
              <ul>
                <se-switch-on-off v-on:switched="checkboxChagned" active="on" inactive="off" />
                <se-switch-on-off v-on:switched="checkbox2Chagned" active="on" inactive="off" />
              </ul>
          </se-widget-content>
          <se-widget-footer>
            <se-button>Apply</se-button>
          </se-widget-footer>
        </se-widget>
      </se-widget-container>
    </se-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      appInformation: "Test Advisor"
    };
  },
  methods: {
    checkboxChagned(val) {
      alert(`switch event: ${val.detail.active}`)
    },
    checkbox2Chagned(val) {
      alert(`switch 2 event: ${val.detail.active}`)
    }
  },
};
</script>
<style>
  .mycoolstyle {
    color: red;
  }
   .flex {
      flex: 1
    }
    .d-flex {
      display: flex;
    }
</style>
