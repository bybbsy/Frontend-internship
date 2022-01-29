# vuex-app

## Project setup
```
npm install
```

## ts-loader and webpack
ts-loader `<v9.x` **supports** webpack 4.

ts-loader `>=9.x` **does not support** webpack 4.

In this app I downgraded ts-loader version to v8.1.0. *The most stable before migrating to webpack 5*

See [ts-loader github page](https://github.com/TypeStrong/ts-loader/releases/tag/v9.0.0).

## tsconfig.json with '??' operator

It doesn't properly handle '??' if I set up target es target versions lower than 2016 and higher than 2021 (including esnext).

So I need to set up this way:

```vue
    "compilerOptions": {
      "target": "ES2018",
      "module": "esnext",
        ...
        "lib": [
        "ES2018",
        ...
        "ScriptHost"
        ],
        ...
      }
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
