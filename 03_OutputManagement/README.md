# 管理输出
```
npm init
npm install webpack webpack-cli --save-dev
npm install --save lodash
npm install --save-dev html-webpack-plugin

PS D:\workspace\VisualStudioCode\webpack-examples\03_OutputManagement> npm run build

> 01_helloworld@1.0.0 build D:\workspace\VisualStudioCode\webpack-examples\03_OutputManagement
> webpack --config ./webpack.config.js

Hash: 58be2e14cc965d4b3712
Version: webpack 4.29.6
Time: 3590ms
Built at: 2019-04-02 16:24:59
          Asset       Size  Chunks             Chunk Names
  app.bundle.js   70.6 KiB    0, 1  [emitted]  app
     index.html  254 bytes          [emitted]
print.bundle.js   1.02 KiB       1  [emitted]  print
Entrypoint app = app.bundle.js
Entrypoint print = print.bundle.js
[0] ./src/print.js 85 bytes {0} {1} [built]
[2] ./src/index.js 417 bytes {0} [built]
[3] (webpack)/buildin/global.js 472 bytes {0} [built]
[4] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
PS D:\workspace\VisualStudioCode\webpack-examples\03_OutputManagement>
```