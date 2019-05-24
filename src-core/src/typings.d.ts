/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.svg' {
  const svgContent: string;

  export default svgContent;
}
