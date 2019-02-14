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
  </se-widget-container>
</template>
