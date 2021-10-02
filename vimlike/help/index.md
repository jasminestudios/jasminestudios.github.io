---
layout: default
---

# Vimlike

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Key Bindings](#key-bindings)
- [Links](#links)
- [Customization](#customization)

## Introduction
VIMlike is Safari extension for the Vim-like keyboard experience. You can navigate a page and open a link with the keyboard shortcuts.

  ![Screen Shot](/Resources/vimlike-screen1.png)

## Downloads
The latest version of Vimlike is available in AppStore:

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1584519802)

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
Vimlike supports customizing the mapping of the keyboard shortcuts in Vimlike app.

```
settings.map('j', VLCommand.SCROLL_DOWN);
settings.map('k', VLCommand.SCROLL_UP);
settings.map('h', VLCommand.SCROLL_LEFT);
settings.map('l', VLCommand.SCROLL_RIGHT);
```
