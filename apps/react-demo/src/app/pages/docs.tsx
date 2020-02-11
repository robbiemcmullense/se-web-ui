import React, { Component } from 'react';
import { SeContainer, SeButton, SeBlock, SeBlockHeader, SeBlockContent, SeBlockFooter, SeBanner, SeBannerItem, SeSnackbar, SeDialog, SeDialogHeader, SeDialogContent, SeDialogFooter } from '@se/web-ui-react';

const widgetStyle = {
  width: '300px'
}

class Docs extends Component {
  openDialog(id) {
    document.getElementById(id).open = true;
  }

  closeDialog(id) {
    document.getElementById(id).open = false;
  }

  openSnackbar = () => {
    document.getElementById('snackbar').open = true;
  }

  render() {
    return (
      <SeContainer direction="column">
        <SeBlock style={widgetStyle}>
          <SeBlockHeader>Banner Example</SeBlockHeader>
          <SeBlockContent>
            <SeBanner id="SeBanner">
              <SeBannerItem
                image-url="url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)">
                <SeBlock color="none" divider="false">
                  <SeBlockHeader>Reliable Through the Storm</SeBlockHeader>
                  <SeBlockContent>
                    <div>
                      And we do it at every level with EcoStruxure.
                      Discover how Schneider Electric bold ideas happen with an INNOVATION portfolio
                      of IoT enabled, connected products, edge control, and apps, analytics, and services.
                  </div>
                  </SeBlockContent>
                  <SeBlockFooter>
                    <SeButton slot="start" color="secondary">Call to action</SeButton>
                    <SeButton slot="start" option="outline">Secondary button</SeButton>
                  </SeBlockFooter>
                </SeBlock>
              </SeBannerItem>
              <SeBannerItem
                image-url="url(https://images.unsplash.com/photo-1440098334316-9b3afb87b5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)">
                <SeBlock outline outline-color="primary" clickable margin="xlarge" corner="4" color="standard">
                  <SeBlockHeader>Header 2</SeBlockHeader>
                  <SeBlockContent>Content 2</SeBlockContent>
                  <SeBlockFooter>Footer 2</SeBlockFooter>
                </SeBlock>
              </SeBannerItem>
              <SeBannerItem
                image-url="url(https://images.freeimages.com/images/large-previews/199/sunflowers-6-1392951.jpg)">
                <SeBlock>
                  <SeBlockHeader>Header 3</SeBlockHeader>
                  <SeBlockContent>Content 3</SeBlockContent>
                  <SeBlockFooter>Footer 3</SeBlockFooter>
                </SeBlock>
              </SeBannerItem>
            </SeBanner>
          </SeBlockContent>
          <SeBlockFooter>
            <SeButton option="raised" onClick={() => this.openSnackbar()}>Open Snackbar</SeButton>
            <SeButton onClick={() => this.openDialog('simple')}>Open Dialog Simple</SeButton>
            <SeButton onClick={() => this.openDialog('complex')} option="text" color="primary">Open Dialog Complex</SeButton>
          </SeBlockFooter>
        </SeBlock>
        <SeSnackbar id="snackbar" message="my snackbar message"></SeSnackbar>
        <SeDialog id="simple" color="alternative" size="small">
          <SeDialogContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</SeDialogContent>
          <SeDialogFooter>
            <SeButton onClick={() => this.closeDialog('simple')} option="alternative">cancel</SeButton>
            <SeButton onClick={() => this.closeDialog('simple')}>OK</SeButton>
          </SeDialogFooter>
        </SeDialog>
        <SeDialog id="complex">
          <SeDialogHeader>My awesome title</SeDialogHeader>
          <SeDialogContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</SeDialogContent>
          <SeDialogFooter>
            <SeButton onClick={() => this.closeDialog('complex')} option="alternative">cancel</SeButton>
            <SeButton onClick={() => this.closeDialog('complex')}>OK</SeButton>
          </SeDialogFooter>
        </SeDialog>
      </SeContainer>
    );
  }
}

export default Docs;