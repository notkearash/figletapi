# Figlet API
Figlet as an API! cause why not..? written in TypeScript.
## Setup
**Step one** - Install the deps
```
npm i
```
**Step two** - Run the development server
```
npm run dev
```
## How to use
This server supports two configs of figlet. Classic and Ghost font.
```bash
$ curl "http://127.0.0.1:8000/api/hi" # Classic endpoint
  _     _ 
 | |__ (_)
 | '_ \| |
 | | | | |
 |_| |_|_|
```
```bash
$ curl "http://127.0.0.1:8000/api/ghost/hi" # Ghost endpoint
 ('-. .-.          
( OO )  /          
,--. ,--.  ,-.-')  
|  | |  |  |  |OO) 
|   .|  |  |  |  \ 
|       |  |  |(_/ 
|  .-.  | ,|  |_.' 
|  | |  |(_|  |    
`--' `--'  `--'    %   
```
## Notes
+ Quick and Dirty project
+ Let me know if you actually deployed it

MIT Licensed
