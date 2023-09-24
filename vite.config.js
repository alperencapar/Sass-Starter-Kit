import { defineConfig } from "vite"
import cssnanoPlugin from "cssnano"
import autoprefixer from "autoprefixer"
import htmlPurge from "vite-plugin-purgecss"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	css: {
		postcss: {
			plugins: [autoprefixer(), cssnanoPlugin()],
		},
	},
	plugins: [
		htmlPurge([
			htmlPurge(),
			ViteImageOptimizer({
				// https://sharp.pixelplumbing.com/api-output
				png: {
					quality: 80,
				},
				jpeg: {
					quality: 80,
				},
				jpg: {
					quality: 80,
				},
				tiff: {
					quality: 80,
					lossless: true,
				},
				webp: {
					quality: 80,
					lossless: true,
				},
				avif: {
					quality: 80,
					lossless: true,
				},
			}),
		]),
	],
})
