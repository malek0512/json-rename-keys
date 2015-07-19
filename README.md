json-rename-keys
================

A Node.js module that allows to rename object keys and the nested ones.

#Simple example

```javascript
var rename = require('json-rename-keys');
var jsonobject = {"sn":{"sn":{"sn":"nested key","s3":"hi"},"s2":{"s22":"coucou","sn":"nested key"}},"s1":{"sn":"nested key"}};

rename(jsonobject, function(key){
    switch(key) {
    	case "sn" : return "cn";
    }
});

```

#result :

```javascript
{"cn":{"cn":{"cn":"nested key","s3":"hi"},"s2":{"s22":"coucou","cn":"nested key"}},"s1":{"cn":"nested key"}}
```
