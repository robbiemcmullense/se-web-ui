/**
 * @description Configuration for opening snackbar with the SnackbarService.
 */
export class SnackbarConfig {

    /**
     * @description type of snackbar :'success' | 'error' | 'warning' | 'information'
     */
    type?: 'success' | 'error' | 'warning' | 'information' = 'information';

    /**
     * @description message value passed to display in snackbar component.
     */
    message: string;

    /**
    * @description icon value is passed to display in snackbar component
    */
    icon?: string;

    /**
    * @description canClose boolean flag to set whether close button is required in snackbar component.
    */
    canClose?: boolean;

    /**
    * @description closeText passed to displayed on close button in snackbar component.
    */
    closeText?: string;

    /**
    * @description time duration for which snackbar will be displayed.
    */
    duration?:number=5000;
}