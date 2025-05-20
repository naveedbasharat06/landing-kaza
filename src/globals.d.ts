// src/global.d.ts

// Telling TypeScript about the jQuery module
declare module 'jquery';

// Extending the Window interface to include `$` (jQuery) and `fullpage` properties
declare global {
  interface Window {
    $: any;
    fullpage: any;
  }
}

// Ensure that this file is recognized as a module by TypeScript
export {};
