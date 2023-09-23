import autoprefixer from "autoprefixer"
import cssnanoPlugin from "cssnano"

module.exports = {
	plugins: [
		autoprefixer(),
		cssnanoPlugin({
			preset: "default",
		}),
	],
}
