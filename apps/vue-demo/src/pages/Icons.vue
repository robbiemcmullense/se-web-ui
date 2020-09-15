<template>
  <SeContainer option="widget">
    <SeBlock width="300px">
      <SeBlockHeader>
        Typography
        <div slot="end">
          <SeDropdown alignment="right">
            <SeIcon slot="trigger" option="button" color="alternative"
              >other_vertical</SeIcon
            >
            <SeList option="dropdown">
              <SeListItem item="I'm selected"></SeListItem>
              <SeListItem
                item="my item 2 no description  with a long text"
              ></SeListItem>
              <SeListItem item="my item 3 no icon"></SeListItem>
            </SeList>
          </SeDropdown>
        </div>
      </SeBlockHeader>
      <SeBlockContent>
        <h1>My h1 string with a divider</h1>
        <SeDivider></SeDivider>
        <h2>My h2 string with a divider</h2>
        <SeDivider></SeDivider>
        <h3>My h3 string with a divider</h3>
        <SeDivider></SeDivider>
        <h4>My h4 string with a divider</h4>
        <SeDivider></SeDivider>
        <h5>My h5 string with a divider</h5>
        <SeDivider></SeDivider>
        <h6>My h6 string with a divider</h6>
        <SeDivider></SeDivider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </SeBlockContent>
      <SeBlockFooter>
        <SeButton option="raised">Somthing</SeButton>
      </SeBlockFooter>
    </SeBlock>
    <SeBlock>
      <SeBlockHeader>
        Tree view
        <div slot="end">
          <SeIcon option="button" color="alternative" onclick="toggle(6)"
            >presentation_mode</SeIcon
          >
        </div>
      </SeBlockHeader>
      <SeBlockContent option="fill">
        <SeList option="treeview">
          <SeListGroup item="Treeview Example">
            <SeListItem item="First treeview child"></SeListItem>
            <SeListGroup option="treeview" item="Second treeview child">
              <SeListItem
                item="I'm the first treeview grandchild!"
              ></SeListItem>
              <SeListItem
                item="I'm the second treeview grandchild!"
                selected="true"
              ></SeListItem>
            </SeListGroup>
            <SeListItem item="Third treeview child"></SeListItem>
          </SeListGroup>
        </SeList>
      </SeBlockContent>
    </SeBlock>
  </SeContainer>
</template>

<script>
import {
  SeContainer,
  SeBlock,
  SeBlockHeader,
  SeDropdown,
  SeIcon,
  SeList,
  SeListItem,
  SeBlockContent,
  SeDivider,
  SeBlockFooter,
  SeButton,
  SeListGroup,
} from '@se/web-ui-vue';

export default {
  components: {
    SeContainer,
    SeBlock,
    SeBlockHeader,
    SeDropdown,
    SeIcon,
    SeList,
    SeListItem,
    SeBlockContent,
    SeDivider,
    SeBlockFooter,
    SeButton,
    SeListGroup,
  },
};
</script>
