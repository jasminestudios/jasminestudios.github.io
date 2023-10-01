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
- [Website Specific Key Bindings and Script](#website-specific-key-bindings-and-script)

## Introduction
VIMlike is Safari extension for the Vim-like keyboard experience. You can navigate a page and open a link with the keyboard shortcuts.

  ![Screen Shot](/Resources/vimlike.png)

## Downloads
The latest version of Vimlike is available in AppStore:

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1584519802)
[<img src="/Resources/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://apps.apple.com/app/vimlike/id1584519802)

## Version History
### v1.4.4
*1 Oct 2023*
* Bug fix: Safari 17 scroll issue

### v1.4.3
*10 Sep 2023*
* Bug fix: link hints issues for some websites

### v1.4.2
*20 Jun 2023*
* New command: opening the link below the cursor (default key: a)
* New command: opening the link below the cursor in a new tab (default key: s)
* New command: reader view (default key: shift+r)

### v1.4.1
*17 May 2023*
* Enhanced the script editor with syntax highlighting in Keyboard and Website settings
* Additional links styles with larger fonts in Appearance settings

### v1.4.0
*20 Nov 2022*
* Migration to Manifest v3
* Bugfix

### v1.3.5
*1 Nov 2022*
* Bugfix (scrolling issue)
* Bugfix (select text issue when focusing textbook)

### v1.3.4
*26 Sep 2022*
* Advanced option for click animation on/off
* Advanced option for text selection when focusing textbox

### v1.3.3
*13 Sep 2022*
* Supports custom CSS stylesheet for website settings
* Supports export and import of website settings
* Bug fix

### v1.3.1
*16 Aug 2022*
* Javascript validation in keybindings and script settings
* Fixed the issue with smart quotes and dashes in script editor (many thanks Oğulcan!)
* Bug fix

### v1.3.0
*15 Aug 2022*
* Supports Website Settings
* Custom key bindings and javascript for a specific website
* Supports synchonization of settings across mac, iPad and iPhone via iCloud

### v1.2.4
*17 Jul 2022*
* New command: 'y y' to copy the URL and 'y t' to duplicate the tab
* Enhanced smooth scroll
* Bugfix

### v1.2.3
*17 Jul 2022*
• New command: 'y y' to copy the URL and 'y t' to duplicate the tab
• Enhanced smooth scroll

### v1.2.2
*10 Jul 2022*
* Enhanced smooth scroll
* Support the scroll speed configuration

### v1.2.1
*19 Jun 2022*
* Support a sequence of the keys for the shortcut
* Updated the default shortcut to go to top of the page as 'g g'
* New default shortcut to go to tab 'g 1' ... 'g 9'
* New default shortcut to go to the last tab 'g $'

### v1.2.0
*28 May 2022*
* Fixed the scroll issue

### v1.1.5
*3 Feb 2022*
* Now Vimlike supports iPhone. Browse the web with iPhone and the bluetooth keyboard like a geek
* Fixed the latin keyboard layout issue (e.g. German, French layouts) with "Ignore Keyboard Layout" option

### v1.1.4
*26 Dec 2021*
* Link hints are optimized. Large images, videos and texts are prioritized in link hints.
* Link hints optimization can be changed in Settings.

### v1.1.3
*12 Dec 2021*
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
*10 Oct 2021*
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
*4 Oct 2021*
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
| <kbd>g</kbd> <kbd>g</kbd> | Go to top of page|
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
| <kbd>y</kbd> <kbd>y</kbd> | Copy current URL to the clipboard |
| <kbd>y</kbd> <kbd>t</kbd> | Duplicate current tab |
| <kbd>r</kbd> | Reload tab |
| <kbd>/</kbd> | Search links |
| <kbd>i</kbd> | Go to the first edit box |
| <kbd>g</kbd> <kbd>1</kbd> ... <kbd>g</kbd> <kbd>9</kbd> | Go to tab 1...9 |
| <kbd>g</kbd> <kbd>shift</kbd>+<kbd>4</kbd> | Go to the last tab |
| <kbd>shift</kbd> + <kbd>/</kbd> | Toggle shortcut help |
| <kbd>a</kbd> | opening the link below the cursor |
| <kbd>s</kbd> | opening the link below the cursor in a new tab |
| <kbd>shift</kbd> + <kbd>r</kbd> | Reader mode |

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
//settings.map('g', VLCommand.SCROLL_TO_TOP); // deprecated
settings.map('g g', VLCommand.SCROLL_TO_TOP);
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
settings.map('g shift+t', VLCommand.PREV_TAB);
settings.map('ctrl+k', VLCommand.NEXT_TAB);
settings.map('g t', VLCommand.NEXT_TAB);
settings.map('t', VLCommand.NEW_TAB);
settings.map('i', VLCommand.FOCUS_INPUT);
settings.map('slash', VLCommand.SHOW_CONSOLE);
settings.map('ctrl+i', VLCommand.INSERT_MODE);
settings.map('g 1', VLCommand.OPEN_TAB1);
settings.map('g 2', VLCommand.OPEN_TAB2);
settings.map('g 3', VLCommand.OPEN_TAB3);
settings.map('g 4', VLCommand.OPEN_TAB4);
settings.map('g 5', VLCommand.OPEN_TAB5);
settings.map('g 6', VLCommand.OPEN_TAB6);
settings.map('g 7', VLCommand.OPEN_TAB7);
settings.map('g 8', VLCommand.OPEN_TAB8);
settings.map('g 9', VLCommand.OPEN_TAB9);
settings.map('g shift+4', VLCommand.OPEN_LAST_TAB);
settings.map('g 0', VLCommand.OPEN_TAB1);
settings.map('x', VLCommand.CLOSE_TAB);
settings.map('ctrl+u', VLCommand.VIDEO_FULLSCREEN);
settings.map('ctrl+p', VLCommand.VIDEO_PIP);
settings.map('ctrl+d', VLCommand.DARK_MODE);
settings.map('r', VLCommand.RELOAD);
settings.map('?', VLCommand.TOGGLE_HELP);
settings.map('shift+slash', VLCommand.TOGGLE_HELP);
settings.map('/', VLCommand.SHOW_CONSOLE);
settings.map('y y', VLCommand.COPY_CURRENT_URL);
settings.map('y t', VLCommand.DUPLICATE_TAB);

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
| VLCommand.COPY_CURRENT_URL | Copy current URL to the clipboard |
| VLCommand.DUPLICATE_TAB | Duplicate current tab |


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

## Website Specific Key Bindings and Script
Vimlike version 1.3.0 or above supports custom key binding and custom script for a specific website.

### Examples
#### google.com
```javascript
settings.map('bracketleft', function(vimlike) {
    vimlike.click('//a[@id="pnprev"]');
});

settings.map('bracketright', function(vimlike) {
    vimlike.click('//a[@id="pnnext"]');
});
```

### youtube.com
```javascript
// www.youtube.com
let watchUrls = ['https://www.youtube.com/watch', 'https://m.youtube.com/watch'];

// Go to Home
settings.map('g h', function(vimlike) {
    window.open("https://www.youtube.com", "_self");
});

// Go to Explorer
settings.map('g e', function(vimlike) {
    window.open("https://www.youtube.com/feed/explore", "_self");
});

// Go to Shorts
settings.map('g o', function(vimlike) {
    window.open("https://www.youtube.com/shorts", "_self");
});

// Go to Subscription
settings.map('g s', function(vimlike) {
    window.open("https://www.youtube.com/feed/subscriptions", "_self");
});

// Next track
settings.map('bracketright', function(vimlike) {
    let button = document.querySelector('a.ytp-next-button');
    
    if (button != null) {
        button.click();
    }
}, {includes: watchUrls});

// Skip ad
settings.map('s', function(vimlike) {
    if (document.querySelector('.ad-showing')) {
        const video = document.querySelector('video');
        if (video && video.duration) {
            video.currentTime = video.duration;
        }
    }

    const skip = document.querySelector('button.ytp-ad-skip-button');
    if (skip) {
        skip.click();
    }
    
    const close = document.querySelector('button.ytp-ad-overlay-close-button');
    if (close) {
        close.click();
    }
}, {includes: watchUrls});

settings.unmap('space');
```
### instagram.com
```javascript

// Go to Home
settings.map('g h', function(vimlike) {
    window.open("https://www.instagram.com", "_self");
});

// Go to Inbox
settings.map('g i', function(vimlike) {
    window.open("https://www.instagram.com/direct/inbox/", "_self");
});

// Go to Explorer
settings.map('g e', function(vimlike) {
    window.open("https://www.instagram.com/explore/", "_self");
});

// Close
settings.map('backslash', function(vimlike) {
    vimlike.click('//div[div/*[local-name()="svg" and @aria-label="Close"]]');
});

// Next
settings.map('bracketright', function(vimlike) {
    vimlike.click('//button[div/span/*[local-name()="svg" and @aria-label="Next"]]');
});

// Prev
settings.map('bracketleft', function(vimlike) {
    vimlike.click('//button[div/span/*[local-name()="svg" and @aria-label="Go back"]]');
});

```

### amazon.com
```javascript
// Go to next page
settings.map('bracketright', function(vimlike) {
    vimlike.click('//a[contains(@aria-label, "Go to next page")]');
});

// Go to previous page
settings.map('bracketleft', function(vimlike) {
    vimlike.click('//a[contains(@aria-label, "Go to previous page")]');
});
```

