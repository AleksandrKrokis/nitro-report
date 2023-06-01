Reproduction of `NITRO_PRESET=node`

If to build project with usual preset `node-server`, the public directory works properly.

If to do it with `NITRO_PRESET=node`, the public directory exists,
but no manifest included into `node.mjs` and by this reason files from this dir, does not serve.
