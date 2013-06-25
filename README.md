# withnailandi

A library that returns lines from the film withnail and I

## Usage 

```
var withnail = require('withnailandi');

withnail.getline(1, 2, function(err, lines){
 ...
 })
```

Where 1 is the starting line and 2 is the amount of following lines to get.
Any number larger than 7159 will just return the last line
