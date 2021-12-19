---
layout: default
---

# Keyboard Shortcut Customization
- [Default Mapping](#default-mapping)
- [Keys](#keys)

# Default Mapping
```javascript
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

## Commands

| ID          |Command|
|:-------------|:----------------------|
| VLCommand.SCROLL_UP | Scroll up |
| VLCommand.SCROLL_DOWN | Scroll down |
| VLCommand.SCROLL_LEFT | Scroll left |
| VLCommand.SCROLL_RIGHT | Scroll right |
| VLCommand.HALF_PAGE_DOWN | Half page up |
| VLCommand.HALF_PAGE_UP | Half page down |
| VLCommand.SCROLL_TO_TOP | Go to top of page |
| VLCommand.SCROLL_TO_BOTTOM | Go to bottom of page |
| VLCommand.PAGE_UP | Scroll up a page |
| VLCommand.PAGE_DOWN | Scroll down a page |
| VLCommand.FOCUS_INPUT | Go to the first edit box |
| VLCommand.NORMAL_MODE | Normal mode |
| VLCommand.INSERT_MODE | Insert mode (shortcuts are disabled) |
| VLCommand.TOGGLE_HELP | Toggle shortcut help |
| VLCommand.DARK_MODE | Toggle dark mode |
| VLCommand.GO_BACK | Go back |
| VLCommand.GO_FORWARD | Go forward |
| VLCommand.ACTIVATE_LINK | Toggle links |
| VLCommand.ACTIVATE_LINK_WITH_NEW_TAB | Activate link hints (open in a new tab) |
| VLCommand.NEXT_LINK | Move to next link |
| VLCommand.PREV_LINK | Move to previous link |
| VLCommand.SHOW_CONSOLE | Search links |
| VLCommand.OPEN_SELECTED_LINK | Open link |
| VLCommand.OPEN_SELECTED_LINK_IN_NEW_TAB | Open link in a new tab |
| VLCommand.NEW_TAB | New tab |
| VLCommand.PREV_TAB | Previous tab |
| VLCommand.NEXT_TAB | Next tab |
| VLCommand.CLOSE_TAB | Close tab |
| VLCommand.OPEN_TAB1 | Open tab 1 |
| VLCommand.OPEN_TAB2 | Open tab 2 |
| VLCommand.OPEN_TAB3 | Open tab 3 |
| VLCommand.OPEN_TAB4 | Open tab 4 |
| VLCommand.OPEN_TAB5 | Open tab 5 |
| VLCommand.OPEN_TAB6 | Open tab 6 |
| VLCommand.OPEN_TAB7 | Open tab 7 |
| VLCommand.OPEN_TAB8 | Open tab 8 |
| VLCommand.OPEN_TAB9 | Open tab 9 |
| VLCommand.VIDEO_FULLSCREEN | Play video in a fullscreen |
| VLCommand.VIDEO_PIP | Play video in a PIP (picture-in-picture) |
| VLCommand.RELOAD | Reload |

## Keys

| Key          |Code|
|:-------------|:----------------------|
| <kbd>tab</kbd> | Tab |
| <kbd>space</kbd> | Space |
| <kbd>page up</kbd> | PageUp |
| <kbd>page down</kbd> | PageDown |
| <kbd>end</kbd> | End |
| <kbd>home</kbd> | Home |
| <kbd>←</kbd> | ArrowLeft |
| <kbd>↑</kbd> | ArrowUp |
| <kbd>→</kbd> | ArrowRight |
| <kbd>↓</kbd> | ArrowDown |
| <kbd>print screen</kbd> | PrintScreen |
| <kbd>insert</kbd> | Insert |
| <kbd>delete</kbd> | Delete |
| <kbd>;</kbd> | Semicolon |
| <kbd>=</kbd> | Equal |
| <kbd>,</kbd> | Comma |
| <kbd>-</kbd> | Minus |
| <kbd>.</kbd> | Period |
| <kbd>/</kbd> | Slash |
| <kbd>`</kbd> | Backquote |
| <kbd>[</kbd> | BracketLeft |
| <kbd> \ </kbd> | Backslash |
| <kbd>]</kbd> | BracketRight |
| <kbd>'</kbd> | Quote |
