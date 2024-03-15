declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            MONGO_URI?: string;
            TOKEN?: string;
        }
    }
}

export {}; // This is a module, so turn it into a module
