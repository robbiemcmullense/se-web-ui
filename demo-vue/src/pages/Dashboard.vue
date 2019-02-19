<template>
  <se-container mode="widget">
    <se-widget style="width: 300px">
      <se-widget-header>Filter</se-widget-header>
      <se-widget-content>
        <div class="mycoolstyle">my content</div>
        <ul>
          ...
        </ul>
        <se-radio-on-off id="switch-el"></se-radio-on-off>
      </se-widget-content>
      <se-widget-footer>
        <se-button mode="flat" color="error">Warning</se-button>
        <se-button mode="login" value="myLoginValue">Login</se-button>
        <se-button mode="signup">Sign Up</se-button>
      </se-widget-footer>
    </se-widget>
  </se-container>
</template>
