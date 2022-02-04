---
layout: default
---
[_metadata_:apple-itunes-app]:- "app-id=1584519802"


# Vimlike

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Version History](#version-history)
- [Privacy Policy](#privacy-policy)
- [Key Bindings](#key-bindings)
- [Links](#links)
- [Customization](#customization)

## Introduction
VIMlike is Safari extension for the Vim-like keyboard experience. You can navigate a page and open a link with the keyboard shortcuts.

  ![Screen Shot](/Resources/vimlike.png)

## Downloads
The latest version of Vimlike is available in AppStore:

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1584519802)
[<img src="/Resources/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://apps.apple.com/app/vimlike/id1584519802)

## Version History
### v1.1.5
* Now Vimlike supports iPhone. Browse the web with iPhone and the bluetooth keyboard like a geek
* Fixed the latin keyboard layout issue (e.g. German, French layouts) with "Ignore Keyboard Layout" option

### v1.1.3
* Added a shortcut to reload a page. In case you customized keyboard shortcuts, please add following;
```javascript
settings.map('r', VLCommand.RELOAD);
```

* Added new settings;
** Require Enter when opening the link in Console
** Ignore Keyboard Layout; to support the latin keyboards other than US-EN Qwerty (e.g. German).
** Prevent focus on page load

* Added keyboard shortcut help button to open the help page listing the key codes

### v1.1.1
* Supports to open the link in background as an option when it opens as a new tab
* Supports to open the multiple links continuously in background as an option
* Supports 2 themes - Classic (black text and yellow background) and Terminal (terminal-like green text and black background)
* Supports alpha+numeric link labels
* Option to turn on/off image blur when the links are displayed
* Option to turn on/off scroll animation
* Option to show the link labels in upper case or lower case
* Suppressed 1...9 key to open the tab by default (planned to repurpose 1...9 keys in future. Please use Safari default cmd+1...9 instead)
* Fix the bug: Tab key is back to select the link

### v1.0
* Initial release

## Privacy Policy
Vimlike does NOT collect any of your data. The only data Vimlike stores are your settings. These are only saved locally. No one, other than you, has access to this data.

Because of the way Vimlike works, the Vimlike extension needs to have permission to access to the website. This is needed because Vimlike has to add javascript to manage keyboard shortcuts and links to the web page. However, Vimlike never use these permissions to actually read the websites you visit, or to access your browsing history. 

Vimlike does not store any information about the websites you're visiting. Not even locally on your device.

In Safari Preference, you can Allow or Deny the extensions to specific websites. In case you want to be extra cautious to certain websites, you can enable or disable Vimlike to the specific websites only.

## Key Bindings
### Cheatsheet (Default)
  ![Screen Shot](/Resources/vimlike-keyboard1.jpg) 

| Key          |Command|
|:-------------|:----------------------|
| <kbd>k</kbd> | Scroll up|
| <kbd>j</kbd> | Scroll down|
| <kbd>h</kbd> | Scroll left|
| <kbd>l</kbd> | Scroll right|
| <kbd>u</kbd> | Half page up|
| <kbd>d</kbd> | Half page down|
| <kbd>g</kbd> | Go to top of page|
| <kbd>shift</kbd> + <kbd>g</kbd> | Go to bottom of page|
| <kbd>f</kbd> | Toggle links|
| <kbd>shift</kbd> + <kbd>f</kbd> | Toggle links (open a link in a new tab)|
| <kbd>tab</kbd> or <kbd>n</kbd> | Toggle links / Move to next link or search result|
| <kbd>shift</kbd> + <kbd>tab</kbd> or <kbd>shift</kbd> + <kbd>n</kbd> | Toggle links / Move to previous link or search result|
| <kbd>esc</kbd> or <kbd>`</kbd> or<br/><kbd>§</kbd> (configurable in Settings) | Back to Normal mode|
| <kbd>shift</kbd> + <kbd>h</kbd> | Go back |
| <kbd>shift</kbd> + <kbd>l</kbd> | Go forward |
| <kbd>q</kbd> | Previous tab |
| <kbd>w</kbd> | Next tab |
| <kbd>t</kbd> | New tab |
| <kbd>x</kbd> | Close tab |
| <kbd>r</kbd> | Reload tab |
| <kbd>/</kbd> | Search links |
| <kbd>i</kbd> | Go to the first edit box |
| <kbd>1</kbd> ... <kbd>9</kbd> | Open tab 1...9 |
| <kbd>shift</kbd> + <kbd>/</kbd> | Toggle shortcut help |

### Cheatsheet (+Control)
  ![Screen Shot](/Resources/vimlike-keyboard2.jpg) 

| Key          |Command|
|:-------------|:----------------------|
| <kbd>control</kbd> + <kbd>f</kbd> | Scroll up a page|
| <kbd>control</kbd> + <kbd>b</kbd> | Scroll down a page|
| <kbd>control</kbd> + <kbd>j</kbd> | Previous tab |
| <kbd>control</kbd> + <kbd>k</kbd> | Next tab |
| <kbd>control</kbd> + <kbd>i</kbd> | Insert mode (Shortcuts are disabled) |
| <kbd>control</kbd> + <kbd>d</kbd> | Toggle dark mode |
| <kbd>control</kbd> + <kbd>u</kbd> | Play video in a fullscreen|
| <kbd>control</kbd> + <kbd>p</kbd> | Play video in a PIP (picture-in-picture)|

## Links
Vimlike supports navigating the web pages with the keyboard. When you type <kbd>tab</kbd> or <kbd>n</kbd>, Vimlike shows link tags. You can type <kbd>tab</kbd> / <kbd>n</kbd>, or <kbd>shift</kbd> + <kbd>tab</kbd> / <kbd>shift</kbd> + <kbd>n</kbd> to move the focus to the next link or the previous link. And you press enter to open the link. Otherwise, type the tag code or number to open the link directly.

Shortcut <kbd>/</kbd> opens the console to type the text and find matching links. You can also type <kbd>tab</kbd> / <kbd>n</kbd>, or <kbd>shift</kbd> + <kbd>tab</kbd> / <kbd>shift</kbd> + <kbd>n</kbd> to move the focus to the next matching link or the previous matching link.

  ![Screen Shot](/Resources/vimlike-screen2.png)

## Customization
Vimlike supports customizing the mapping of the keyboard shortcuts in Vimlike app. Please refer [Customization Guide](/vimlike/keys) for details.

```javascript
settings.map(key, COMMAND);
settings.map(key, COMMAND, {includes: url}); // mapping the key only for the url
settings.map(key, COMMAND, {excludes: url}); // mapping the key excluding the url
```

The parameter <i>url</i> can be array of strings and regular expressions. For example,

```javascript
settings.map('space', VLCommand.HALF_PAGE_DOWN, {excludes: ['https://www.youtube.com/watch', 'https://www.netflix.com/watch/']});
settings.map('space', VLCommand.HALF_PAGE_DOWN, {includes: [/www\.google\.co.*\/search\?/g]});
```

### Default Key Mapping
Following script is the default key mapping.

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

### Commands

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

### Keys
Vimlike uses Javascript KeyboardEvent.code for the keyboard command. Following table shows codes for the special keys. 

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

KeyboardEvent.code uses the key based on the QWERTY layout. Therefore, key bindings of some of the latin keyboards are different. For example, the code "z" represents for the Z key on a QWERTY layout keyboard, but the same code value also represents the Y key on German keyboards.
