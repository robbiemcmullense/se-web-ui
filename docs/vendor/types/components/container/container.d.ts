import '../../stencil.core';
export declare class ContainerComponent {
    /**
     * Defines the inner apparance of a container.
     * `widget` Add a small spacing all around the container so all widgets are spaced with the same distance.
     * `fill` Default. Take the full space of the container.
     * `centered` center the container so the content does no exceed a max width.
     */
    mode: 'widget' | 'fill' | 'centered' | 'card';
    /**
      * In specific case, it can be necessary to define the container with an absolute position (inside an angular router-container ). Most of the time, the default position will work perfectly with flex box.
      * `relative` Default. Perfect to use with flex content.
      * `absolute` Help in specific cases. Make sure you know that you are doing.
      */
    position: 'relative' | 'absolute';
    hostData(): {
        'class': {
            'widget-content': boolean;
            'full-content': boolean;
            'card-content': boolean;
            'centered-content': boolean;
            'relative': boolean;
            'absolute': boolean;
        };
    };
    render(): JSX.Element;
}
