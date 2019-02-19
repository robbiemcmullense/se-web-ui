<template>
  <se-container mode="widget">
    <se-widget style="width: 300px">
      <se-widget-header>Filter</se-widget-header>

      <se-widget-content>
        <se-radio-on-off id="switch-el"></se-radio-on-off>
        <se-button id="flatBtn1" mode="flat" color="error">Warning</se-button>
        <se-button mode="login" value="myLoginValue">Login</se-button>
        <se-button mode="signup">Sign Up</se-button>
      </se-widget-content>
      <se-widget-footer>
        <se-buttons id="RadioGroup1" mode="radio">
          <se-button value="left">Radio1</se-button>
          <se-button value="right">Radio2</se-button>
        </se-buttons>
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
          <se-button mode="flat" color="error">Warning</se-button>
          <se-button mode="login" value="myLoginValue">Login</se-button>
          <se-button mode="signup">Sign Up</se-button>
          <se-button mode="outline">Outline</se-button>
        </div>
        <div class="button-row">
          <se-button mode="flat">Flat</se-button>
          <se-button mode="flat" color="primary">FlatGreen</se-button>
          <se-button mode="raised">Raised</se-button>
          <se-button mode="raised" color="primary"
            >RaisedGreen</se-button
          >
          <se-button mode="text">Text</se-button>
          <se-button mode="text" color="primary"
            >Primary</se-button
          >
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
