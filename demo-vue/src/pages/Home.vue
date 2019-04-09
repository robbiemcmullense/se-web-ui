<template>
  <se-container option="widget">
    <se-widget style="width: 300px">
      <se-widget-header>Filter</se-widget-header>
      <se-widget-content>
        <se-radio-on-off id="switch-el"></se-radio-on-off>
        <se-button id="flatBtn1" option="flat" color="error">Warning</se-button>
        <se-button option="login" value="myLoginValue">Login</se-button>
        <se-button option="signup">Sign Up</se-button>
      </se-widget-content>
      <se-widget-footer>
        <se-radio option="radio">
          <se-button value="left">Radio1</se-button>
          <se-button value="right">Radio2</se-button>
        </se-radio>
      </se-widget-footer>
    </se-widget>
    <se-widget class="flex">
      <se-widget-header>Filter</se-widget-header>
      <se-widget-content>
        <div class="mycoolstyle">my content</div>
        <ul>
          ...
        </ul>
        <div class="button-row">
          <se-button option="outline">outline</se-button>
          <se-button option="outline" color="primary"
            >outline primary</se-button
          >
          <se-button option="raised" color="secondary"
            >Raised secondary</se-button
          >
        </div>
        <div class="button-row">
          <se-button option="raised">Raised</se-button>
          <se-button option="raised" color="primary">RaisedGreen</se-button>
          <se-button option="text">Text</se-button>
          <se-button option="text" color="primary">Primary</se-button>
        </div>
      </se-widget-content>
      <se-widget-footer> </se-widget-footer>
    </se-widget>
  </se-container>
</template>
<style lang="scss">
.button-row {
  padding: 10px;
  se-button {
    margin: 4px;
  }
}
</style>

<script>
import Api from "@/Api";

export default {
  data() {
    return {
      loading: true,
      posts: null
    };
  },

  created() {
    Api.getPosts()
      .then(response => {
        this.posts = response.data;
        this.loading = false;
      })
      .catch(() => {
        alert("ERROR");
        this.loading = false;
      });
  }
};
</script>
