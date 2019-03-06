import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-snackbar",
  styleUrl: "snackbar.scss",
  shadow: true
})
export class SnackbarComponent {

	@Prop() color: string;

}