/// <reference types="vite/client" />
/* *
* @example 由于vite无法识别vue页面，做一个声明
* */
declare module "*.vue" {
    import type{DefineComponent} from 'vue'
    const component: DefineComponent<{},{},any>
    export  default component
}
