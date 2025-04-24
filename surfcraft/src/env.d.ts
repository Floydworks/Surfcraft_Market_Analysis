interface ImportMetaEnv {
    readonly VITE_MB_MAP_API_TOKEN: string;
    readonly VITE_MB_STYLE: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }