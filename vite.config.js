import { defineConfig } from "vite"
import cssnanoPlugin from "cssnano"
import autoprefixer from "autoprefixer"
import htmlPurge from "vite-plugin-purgecss"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	css: {
		postcss: {
			plugins: [autoprefixer({}), cssnanoPlugin()],
		},
	},
	plugins: [htmlPurge([htmlPurge()])],
})
