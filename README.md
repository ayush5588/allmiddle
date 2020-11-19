# allmiddle
[![NPM VERSION](http://img.shields.io/npm/v/allmiddle.svg?style=flat&logo=npm)](https://www.npmjs.org/package/allmiddle)  [![NPM MODULE](http://img.shields.io/badge/allmiddle-orange.svg?style=flat&logo=node.js)](https://github.com/ayush5588/allmiddle) [![Known Vulnerabilities](https://snyk.io/test/github/ayush5588/allmiddle/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ayush5588/allmiddle?targetFile=package.json)
#### A NPM package which comprises of all the major middlewares needed to be included in the projects.
**[Click here](https://www.npmjs.com/package/allmiddle)** to view this package on **NPM** registry.<br /><br />

# Installation

**using npm**: 
``` 
$ npm install allmiddle
```

**In Node.js:** 
 ```
const allmiddle = require('allmiddle').includeAllMiddle;
allmiddle(app);
```
(where app = express();)
<br /><br />

# Why allmiddle?
With the  of help of **allmiddle**, you don't have to do the manual inclusion of the major middlewares in your project.<br /><br />
The middlewares included in allmiddle are:
* app.use(express.json());
* app.use(express.static("public"));
* app.use(express.static(__dirname));
* app.use(express.urlencoded({extended: true}));
* app.use(cookieParser());
* app.use(cors());
* app.use(helmet());
* app.use(logger('dev'));
* require("dotenv/config");
