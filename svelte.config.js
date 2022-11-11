// svelte.config.js
import preprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const production = process.env.NODE_ENV === "production";
const config = {
  preprocess: preprocess({
    // ...svelte-preprocess options
    sourceMap: !production,
    postcss: {
      plugins: [autoprefixer()],
    },
  }),
  // ...other svelte options
};

export default config;
