# ipint
Convert IP addresses to integers and vice versa.

## Usage

```js
var ipint = require('ipint');

var ip = '174.36.207.186',
    int = ipint.ipToInt('174.36.207.186');

console.log(ip + ' => ' + int);

console.log(int + ' => ' + ipint.intToIp(int));
```
