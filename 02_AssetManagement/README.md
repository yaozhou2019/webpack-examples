# 管理资源

```
npm init
npm install webpack webpack-cli --save-dev
npm install --save lodash
npm install --save-dev style-loader css-loader file=loader

PS D:\workspace\VisualStudioCode\webpack-examples\02_AssetManagement> npm run build

> 01_helloworld@1.0.0 build D:\workspace\VisualStudioCode\webpack-examples\02_AssetManagement
> webpack --config ./webpack.config.js

Hash: b0f7a48b2dee40a1d61e
Version: webpack 4.29.6
Time: 3400ms
Built at: 2019-04-02 16:06:52
                               Asset      Size  Chunks             Chunk Names
0378fe9ea52ef48c291016e9df452f15.png   134 KiB          [emitted]
                           bundle.js  76.3 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[1] ./src/reactLifecycle.png 82 bytes {0} [built]
[2] ./src/index.js 449 bytes {0} [built]
[3] (webpack)/buildin/global.js 472 bytes {0} [built]
[4] (webpack)/buildin/module.js 497 bytes {0} [built]
[5] ./src/style.css 1.06 KiB {0} [built]
[6] ./node_modules/css-loader/dist/cjs.js!./src/style.css 169 bytes {0} [built]
    + 4 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
PS D:\workspace\VisualStudioCode\webpack-examples\02_AssetManagement>
```