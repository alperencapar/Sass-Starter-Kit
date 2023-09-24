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
		htmlPurge([htmlPurge()]),
		ViteImageOptimizer({
			// https://sharp.pixelplumbing.com/api-output
			jpeg: {
				quality: 85,
				// chromaSubsampling: "4:4:4",
			},
			jpg: {
				quality: 85,
				// chromaSubsampling: "4:4:4",
			},
			png: {
				quality: 95,
				compressionLevel: 6,
				palette: true,
				effort: 9,
			},
			webp: {
				quality: 85,
				lossless: true, //false
			},
			tiff: {
				quality: 85,
				lossless: true,
			},
			avif: {
				quality: 85,
				lossless: true,
			},
		}),
	],
})
