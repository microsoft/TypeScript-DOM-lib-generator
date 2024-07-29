## Deploys

We want to take the `d.ts` files inside `generated` into a set of different `@types` packages. This infra all lives inside these files as multiple steps. For debugging you mostly want to run:

```sh
node deploy/createTypesPackages.js
```

Then look at `deploy/generated` to see the set of NPM packages. 