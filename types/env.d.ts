/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv
    glob: ImportGlobFunction
    globEager: ImportGlobEagerFunction
}

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
}
