import * as React from 'react';
import { InternalStandardProps as StandardProps } from '..';

export interface CircularProgressProps
  extends StandardProps<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the root element if `variant="determinate"`. */
    determinate?: string;
    /** Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate?: string;
    /** Styles applied to the root element if `color="primary"`. */
    colorPrimary?: string;
    /** Styles applied to the root element if `color="secondary"`. */
    colorSecondary?: string;
    /** Styles applied to the `svg` element. */
    svg?: string;
    /** Styles applied to the `circle` svg path. */
    circle?: string;
    /** Styles applied to the `circle` svg path if `variant="determinate"`. */
    circleDeterminate?: string;
    /** Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate?: string;
    /** Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink?: string;
  };
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'inherit';
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink?: boolean;
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default 40
   */
  size?: number | string;
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness?: number;
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value?: number;
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate';
}

export type CircularProgressClassKey = keyof NonNullable<CircularProgressProps['classes']>;

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 * Demos:
 *
 * - [Progress](https://material-ui.com/components/progress/)
 *
 * API:
 *
 * - [CircularProgress API](https://material-ui.com/api/circular-progress/)
 */
export default function CircularProgress(props: CircularProgressProps): JSX.Element;
