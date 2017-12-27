/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* for import json files */
declare module "*.json" {
    const value: any;
    export default value;
}