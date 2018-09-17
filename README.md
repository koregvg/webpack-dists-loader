# webpack-dists-loader

The [webpack-dists-loader] library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i webpack-dists-loader --save-dev
```

In Node.js:
```js
// webpack.config.js

// important! please set the options.env to choose which environment you want to use the loader, and set the process.env.NODE_ENV at the entry file 
process.env.NODE_ENV = 'production'

// like js, but css,html the same way
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.js$/,
            use:[
                {
                    loader: 'webpack-dists-loader',
                    options: {
                      env: ['production']
                    }
                },
                {
                    loader: 'babel-loader'
                }
            ],
            include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
        }]
    }
};

```
In js,css and html file,use comments and wrap the code with the special tags
js file
```
console.log('abc')

/*<dev>*/
import mockjs from 'mockjs'
import eruda from 'eruda'
/*</dev>*/

console.log('def')

/*<dev>*/
console.log('ghi')
/*</dev>*/
```

css file
```
.a {
    ...
}

.b {
    ...
}

/*<dev>*/
.c {
    ...
}
/*</dev>*/
```

html file
```
<div class="a"></div>
<div class="b"></div>

<!--debug-->
<div class="c"></div>
<!--/debug-->
```

compiled, code blocks that wrapped with the special tags has been removed

js
```
console.log('abc')

console.log('def')
```

css
```
.a {
    ...
}

.b {
    ...
}
```

html
```
<div class="a"></div>
<div class="b"></div>
```

## Notice

if dealing with js file, please use it before other loaders.
It`s only supports js,css and html files now.other file types(like vue etc) will be supported in later release.