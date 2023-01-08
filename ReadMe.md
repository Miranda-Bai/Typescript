
via npm
You can use npm to install TypeScript globally, this means that you can use the tsc command anywhere in your terminal.

To do this, run npm install -g typescript. This will install the latest version (currently 4.9).

An alternative is to use npx when you have to run tsc for one-off occasions.

安装typescript
npm install typescript --save-dev

生成tsconfig.json文件
npx tsc -init

编译ts文件生成对应的js文件
npx tsc filename

运行js文件
node  fileName.js
如果用node运行ts文件，它会按js的语法检查报错

要检测tsconfig.json文件，这样改它的时候才会有用
terminal=>run task=>show all tasks=>tsc:watch...

ts-node包可以简化ts运行
npm i -g ts-node

