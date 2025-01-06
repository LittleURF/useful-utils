import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
  // ESM Build
  {
    input: "src/index.ts",
    output: {
      file: "dist/esm/index.js",
      format: "es",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
    external: [],
  },

  // UMD Build
  {
    input: "src/index.ts",
    output: {
      file: "dist/umd/index.min.js",
      format: "umd",
      name: "@littleurf/useful-utilities",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
];
