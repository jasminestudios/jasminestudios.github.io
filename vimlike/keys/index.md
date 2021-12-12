---
layout: default
---

# Keyboard Shortcut Customization
- [Default Mapping](#default-mapping)
- [Keys](#keys)

# Default Mapping
```
// Scroll
settings.map('j', VLCommand.SCROLL_DOWN);
settings.map('k', VLCommand.SCROLL_UP);
settings.map('h', VLCommand.SCROLL_LEFT);
settings.map('l', VLCommand.SCROLL_RIGHT);
settings.map('d', VLCommand.HALF_PAGE_DOWN);
settings.map('u', VLCommand.HALF_PAGE_UP);
settings.map('space', VLCommand.HALF_PAGE_DOWN, {excludes: ['https://www.youtube.com/watch', 'https://www.netflix.com/watch/']});
settings.map('shift+space', VLCommand.HALF_PAGE_UP);
settings.map('ctrl+f', VLCommand.PAGE_DOWN);
settings.map('ctrl+b', VLCommand.PAGE_UP);
settings.map('g', VLCommand.SCROLL_TO_TOP);
settings.map('shift+g', VLCommand.SCROLL_TO_BOTTOM);

// Normal mode
settings.map('f', VLCommand.ACTIVATE_LINK);
settings.map('shift+f', VLCommand.ACTIVATE_LINK_WITH_NEW_TAB);
settings.map('n', VLCommand.NEXT_LINK);
settings.map('shift+n', VLCommand.PREV_LINK);
settings.map('tab', VLCommand.NEXT_LINK);
settings.map('shift+tab', VLCommand.PREV_LINK);
settings.map('shift+h', VLCommand.GO_BACK);
settings.map('shift+l', VLCommand.GO_FORWARD);
settings.map('q', VLCommand.PREV_TAB);
settings.map('w', VLCommand.NEXT_TAB);
settings.map('ctrl+j', VLCommand.PREV_TAB);
settings.map('ctrl+k', VLCommand.NEXT_TAB);
settings.map('t', VLCommand.NEW_TAB);
settings.map('i', VLCommand.FOCUS_INPUT);
settings.map('slash', VLCommand.SHOW_CONSOLE);
settings.map('ctrl+i', VLCommand.INSERT_MODE);
//settings.map('1', VLCommand.OPEN_TAB1);
//settings.map('2', VLCommand.OPEN_TAB2);
//settings.map('3', VLCommand.OPEN_TAB3);
//settings.map('4', VLCommand.OPEN_TAB4);
//settings.map('5', VLCommand.OPEN_TAB5);
//settings.map('6', VLCommand.OPEN_TAB6);
//settings.map('7', VLCommand.OPEN_TAB7);
//settings.map('8', VLCommand.OPEN_TAB8);
//settings.map('9', VLCommand.OPEN_TAB9);
settings.map('x', VLCommand.CLOSE_TAB);
settings.map('ctrl+u', VLCommand.VIDEO_FULLSCREEN);
settings.map('ctrl+p', VLCommand.VIDEO_PIP);
settings.map('shift+slash', VLCommand.TOGGLE_HELP);
settings.map('ctrl+d', VLCommand.DARK_MODE);

settings.map('shift+enter', VLCommand.OPEN_SELECTED_LINK);

settings.map('r', VLCommand.RELOAD);
```

## Keys
| Name |Key|
|:-------------|:----------------------|
| tab | Tab |
| space | Space |
| page up | PageUp |
| page down | PageDown |
| end | End |
| home | Home |
| left arrow | ArrowLeft |
| up arrow | ArrowUp |
| right arrow | ArrowRight |
| down arrow | ArrowDown |
| print screen | PrintScreen |
| insert | Insert |
| delete | Delete |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |
| a | a |
| b | b |
| c | c |
| d | d |
| e | e |
| f | f |
| g | g |
| h | h |
| i | i |
| j | j |
| k | k |
| l | l |
| m | m |
| n | n |
| o | o |
| p | p |
| q | q |
| r | r |
| s | s |
| t | t |
| u | u |
| v | v |
| w | w |
| x | x |
| y | y |
| z | z |
| f1 | F1 |
| f2 | F2 |
| f3 | F3 |
| f4 | F4 |
| f5 | F5 |
| f6 | F6 |
| f7 | F7 |
| f8 | F8 |
| f9 | F9 |
| f10 | F10 |
| f11 | F11 |
| f12 | F12 |
| semi-colon | Semicolon |
| equal sign | Equal |
| comma | Comma |
| dash | Minus |
| period | Period |
| forward slash | Slash |
| Backquote/Grave accent | Backquote |
| open bracket | BracketLeft |
| back slash | Backslash |
| close bracket | BracketRight |
| single quote | Quote |
