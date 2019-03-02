<template>
  <se-container mode="widget">
    <se-widget style="width: 300px">
      <se-widget-header>
        Icons
        <div slot="end">
          <se-icon mode="button" color="alternative">favourites_addto</se-icon>
          <se-icon mode="button" color="alternative">other_vertical</se-icon>
        </div>
      </se-widget-header>

      <se-widget-content>
        <se-switch-on-off />
      </se-widget-content>
      <se-buttons id="RadioGroup1" mode="radio">
        <se-button icon="resize"></se-button>
        <se-button icon="resize">resize</se-button>
      </se-buttons>
    </se-widget>
  </se-container>
</template>
