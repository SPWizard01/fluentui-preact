import { $, build, type BuildOutput } from "bun";
await $`rm -rf dist`;
const result = await build({
  entrypoints: ["./showcase/index.tsx"],
  sourcemap: "none",
  outdir: "./dist",
  naming: {
    entry: "[name].[ext]",
  },
  target: "browser",
  splitting: true,
  format: "esm",
  define: {
    BUILD_DATE: JSON.stringify(new Date().toISOString()),
  },
  drop: ["console.debug", "console.log"],
  minify: false,
});

function printOutput(result: BuildOutput) {
  console.table(
    result.outputs.map((bldArt) => {
      return {
        name: bldArt.path,
        size: `${Math.floor(bldArt.size / 1024)}KB`,
      };
    })
  );
}

printOutput(result);
