declare module "*.vue" {
    import { ComponentOptions } from "vue";
    const component: ComponentOptions;
    // import type { DefineComponent } from 'vue'
    // const component: DefineComponent<{}, {}, any>
    export default component;
}
declare module '*.md' {
    import { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}