# ZxyUI Vue Sandbox

This is a sandbox environment for ZxyUI Vue, built with `@vue/repl` and `monaco-editor`.

## Setup

1.  Ensure `@zxy-ui/vue` is built:
    ```bash
    pnpm build --filter @zxy-ui/vue
    ```
2.  Run the sandbox:
    ```bash
    pnpm dev
    ```

## Features

-   Real-time editing of Vue components.
-   Loads `@zxy-ui/vue` from the local `packages/zxy-ui-vue/dist` directory.
-   Uses Monaco Editor for code editing.

## Configuration

The sandbox is configured in `src/App.vue`.
The import map points `@zxy-ui/vue` to `/zxy-ui-vue-dist/esm/index.esm.js`, which is served by a custom Vite middleware in `vite.config.ts`.
