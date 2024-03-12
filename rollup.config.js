import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    esbuild({
      loader: "jsx",
      target: "es2022",
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": '"development"',
    }),
  ],
};
