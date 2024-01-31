import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";


export default {
	input: 'src/app.js',
	output: {
		file: 'dist/app.js',
		format: 'cjs'
	},
    plugins: [nodeResolve(), css(
        {output: 'app.css'}
    )]
};