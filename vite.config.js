import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {

  //   alias: {
  //     '@components': path.resolve(__dirname, 'src/components/'),
  //     '@libs': path.resolve(__dirname, 'src/libs/'),
  //     '@hooks': path.resolve(__dirname, 'src/hooks/'),
  //     '@context': path.resolve(__dirname, 'src/context/')
  //   }
  // }
})
