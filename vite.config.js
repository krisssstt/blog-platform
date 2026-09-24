import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            // Не следить за служебной папкой Visual Studio (иначе ошибка EBUSY)
            ignored: ['**/.vs/**'],
        },
    },
});