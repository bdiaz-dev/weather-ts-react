import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {

  //   alias: {
  //     '@components': path.resolve(__dirname, 'src/components/'),
  //     '@libs': path.resolve(__dirname, 'src/libs/'),
  //     '@hooks': path.resolve(__dirname, 'src/hooks/'),
  //     '@context': path.resolve(__dirname, 'src/context/')
  //   }
  // }
})
