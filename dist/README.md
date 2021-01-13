# Bot external plugin

Usage:
```
<script async defer src="https://rawcdn.githack.com/serhii-lisniakov/popup-bot-plugin/0b19dd0a5d6143d1969e953eb16290bc20546301/js/main.js"></script>
```
### in html project:
```
initBotPlugin(config);
```
### angular:
```
window.initBotPlugin(config);
```

Config:

| Property  | Type | Description |
|---|---|---|
| cssPrefix  | string | for avoiding css overlapping (required) |
| userName  | string | set the user name |
|  |
| backColor | string | set background color |
| borderColor | string | set border color |
| textColor | string | set text color |
| height | string | set height of bot window |
| width | string | set width of bot window |
| btnBackColor | string | set background color of toggle button |

Config required example: 
```
const options = {
    cssPrefix: 'my-selector'
}
```
Config example: 
```
const options = {
    // general
    cssPrefix: 'my-selector',
    userName: null,
    // main styles
    backColor: '#46760a',
    borderColor: '#46760a',
    textColor: '#fff',
    height: '50%',
    width: '300px',
    // start button styles
    btnBackColor: '#46760a',
}
```
