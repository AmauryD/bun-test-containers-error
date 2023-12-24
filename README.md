# bun-test-containers-error

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
=> that's where is crashes
# dyld[26812]: missing symbol called
# [1]    26812 killed     bun index.ts
```