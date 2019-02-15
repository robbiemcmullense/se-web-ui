<template>
  <se-widget-container>
    <se-widget style="width: 300px">
      <se-widget-header>Icons</se-widget-header>

      <se-widget-content>
        <div class="mycoolstyle">my content</div>
        <ul>
          ...
        </ul>
        <se-switch-on-off id="switch" text-on="ON" text-off="OFF" />
      </se-widget-content>
      <se-buttons id="RadioGroup1" mode="radio">
        <se-button value="left">Radio1</se-button>
        <se-button value="right">Radio2</se-button>
      </se-buttons>
    </se-widget>
  </se-widget-container>
</template>
