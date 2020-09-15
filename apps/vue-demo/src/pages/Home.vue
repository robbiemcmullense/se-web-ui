<template>
  <SeContainer option="widget">
    <SeBlock style="width: 300px">
      <SeBlockHeader>Filter</SeBlockHeader>
      <SeBlockContent>
        <SeCheckbox
          option="switch"
          @didChange="myValue = $event.detail.selected"
          :selected="myValue"
        ></SeCheckbox>
        {{ myValue }}
      </SeBlockContent>
      <SeBlockContent>
        <SeButton option="login" value="myLoginValue">Login</SeButton>
        <SeButton option="signup">Sign Up</SeButton>
      </SeBlockContent>

      <SeBlockFooter>
        <SeRadioGroup>
          <SeButton value="left">Radio1</SeButton>
          <SeButton value="right">Radio2</SeButton>
        </SeRadioGroup>
      </SeBlockFooter>
    </SeBlock>
    <SeBlock class="flex">
      <SeBlockHeader>Filter</SeBlockHeader>
      <SeBlockContent>
        <div class="mycoolstyle">my content</div>
        <ul>
          ...
        </ul>
        <div class="button-row">
          <SeButton id="flatBtn1" option="flat" :icon="userStandard"
            >With Icon props!</SeButton
          >
          <SeButton option="outline" :icon="userStandard">outline</SeButton>
          <SeButton option="outline" color="primary" :icon="userStandard"
            >outline primary</SeButton
          >
          <SeButton option="raised" color="secondary"
            >Raised secondary</SeButton
          >
          <!-- <SeIcon size="small" :icon="userStandard"></SeIcon> -->
        </div>
        <div class="button-row">
          <SeButton option="raised">Raised</SeButton>
          <SeButton option="raised" color="primary">RaisedGreen</SeButton>
          <SeButton option="text">Text</SeButton>
          <SeButton option="text" color="primary">Primary</SeButton>
        </div>
      </SeBlockContent>
      <SeBlockFooter> </SeBlockFooter>
    </SeBlock>
  </SeContainer>
</template>
<style lang="scss">
.button-row {
  padding: 10px;
  SeButton {
    margin: 4px;
  }
}
</style>

<script>
import {
  SeContainer,
  SeRadioGroup,
  SeIcon,
  SeButton,
  SeBlockFooter,
  SeBlock,
  SeBlockContent,
  SeBlockHeader,
  SeDivider,
  SeCheckbox,
} from '@se/web-ui-vue';
// import userStandard from '@se/icons/svg/user_standard.svg';

export default {
  components: {
    SeContainer,
    SeRadioGroup,
    SeButton,
    SeBlockFooter,
    SeBlock,
    SeBlockContent,
    SeBlockHeader,
    SeCheckbox,
  },
  data() {
    return {
      // userStandard: userStandard,
      loading: true,
      posts: null,
      myValue: true,
    };
  },
};
</script>
