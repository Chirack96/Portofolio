/// <reference types="vite/client" />
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.jpeg" {
  const value: any;
  export default value;
}
declare module "*.gif" {
  const value: any;
  export default value;
}
declare module "*.webp" {
  const value: any;
  export default value;
}
declare module "*.ico" {
  const value: any;
  export default value;
}

declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}