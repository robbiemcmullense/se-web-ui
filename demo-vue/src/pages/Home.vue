<template>
  <se-widget-container>
    <se-widget style="width: 300px">
      <se-widget-header>Filter</se-widget-header>

      <se-widget-content>
        <div class="mycoolstyle">my content</div>
        <ul>
          ...
        </ul>
        <se-switch-on-off id="switch" text-on="ON" text-off="OFF" />
        <span id="switch-state"></span>
      </se-widget-content>
      <se-widget-footer>
        <se-button appearance="standard">Apply</se-button>
        <se-button appearance="raised">Apply</se-button>
      </se-widget-footer>
    </se-widget>
    <se-widget class="flex">
      <se-widget-header>Filter</se-widget-header>
      <se-widget-content>
        <div class="mycoolstyle">my content</div>
        <ul>
          ...
        </ul>
        <se-button appearance="flat" color="warning">Warning</se-button>
        <se-button appearance="login">Login</se-button>
        <se-button appearance="signup">Sign Up</se-button>
        <span id="button-info"></span>
      </se-widget-content>
      <se-widget-footer fxLayoutAlign="row">
        <se-button appearance="flat" color="primary">Flat</se-button>
        <se-button appearance="raised" color="primary">Raised</se-button>
        <se-button appearance="text">Text</se-button>
        <se-button appearance="text" color="primary">Text</se-button>
      </se-widget-footer>
    </se-widget>
  </se-widget-container>
</template>

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
