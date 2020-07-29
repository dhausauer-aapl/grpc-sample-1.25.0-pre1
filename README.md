Reproduction:

```
$ nvm use 12.13.0
$ npm install
$ npm test

node(66458,0x102ca6dc0) malloc: *** error for object 0x10291ce40: pointer being freed was not allocated
node(66458,0x102ca6dc0) malloc: *** set a breakpoint in malloc_error_break to debug
[1]    66449 abort      npm test
```
