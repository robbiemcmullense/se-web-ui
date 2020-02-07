<template>
  <se-container option="widget">
    <se-block width="300px">
      <se-block-header>
        Typography
        <div slot="end">
          <se-dropdown alignment="right">
            <se-icon slot="trigger" option="button" color="alternative"
              >other_vertical</se-icon
            >
            <se-list option="dropdown">
              <se-list-item item="I'm selected"></se-list-item>
              <se-list-item
                item="my item 2 no description  with a long text"
              ></se-list-item>
              <se-list-item item="my item 3 no icon"></se-list-item>
            </se-list>
          </se-dropdown>
        </div>
      </se-block-header>
      <se-block-content>
        <h1>My h1 string with a divider</h1>
        <se-divider></se-divider>
        <h2>My h2 string with a divider</h2>
        <se-divider></se-divider>
        <h3>My h3 string with a divider</h3>
        <se-divider></se-divider>
        <h4>My h4 string with a divider</h4>
        <se-divider></se-divider>
        <h5>My h5 string with a divider</h5>
        <se-divider></se-divider>
        <h6>My h6 string with a divider</h6>
        <se-divider></se-divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </se-block-content>
      <se-block-footer>
        <se-button option="raised">Somthing</se-button>
      </se-block-footer>
    </se-block>
    <se-block>
      <se-block-header>
        Tree view
        <div slot="end">
          <se-icon option="button" color="alternative" onclick="toggle(6)"
            >presentation_mode</se-icon
          >
        </div>
      </se-block-header>
      <se-block-content option="fill">
        <se-list option="treeview">
          <se-list-group item="Treeview Example">
            <se-list-item item="First treeview child"></se-list-item>
            <se-list-group option="treeview" item="Second treeview child">
              <se-list-item
                item="I'm the first treeview grandchild!"
              ></se-list-item>
              <se-list-item
                item="I'm the second treeview grandchild!"
                selected="true"
              ></se-list-item>
            </se-list-group>
            <se-list-item item="Third treeview child"></se-list-item>
          </se-list-group>
        </se-list>
      </se-block-content>
    </se-block>
  </se-container>
</template>
