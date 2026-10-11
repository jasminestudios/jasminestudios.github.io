---
layout: default
title: Vimlike — Versions, downloads and privacy
description: Vimlike version history, App Store downloads and the privacy policy. What the extension does is on the product page; how it works is in the documentation.
---
[_metadata_:apple-itunes-app]:- "app-id=1584519802"

# Vimlike — Versions &amp; Privacy

[← Vimlike](/vimlike/) · [Documentation](/vimlike/docs/)

Downloads, what changed in each version, and the privacy policy. What Vimlike does is on the [product page](/vimlike/); every key and setting is in the [documentation](/vimlike/docs/).

- [Downloads](#downloads)
- [Version History](#version-history)
- [Privacy Policy](#privacy-policy)

## Downloads
The latest version of Vimlike is available in AppStore:

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1584519802)
[<img src="/Resources/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://apps.apple.com/app/vimlike/id1584519802)

## Version History
### v2.0
*October 2026*
* Keyboard shortcuts as a table: Settings › Keyboard › Custom lists every command by group — record a key, exclude a shortcut on some sites, see conflicts. The settings script is still there in Script mode
* Suggest shortcuts: the AI proposes keys for the places on the site you are on; try them, change them in your words, then save
* Clean up this page: hide or dim ads, banners, sidebars and comments — styles, never code
* Site packs: signed packs for YouTube, Gmail, Google Search and News, Reddit, Wikipedia, GitHub, Hacker News and more, installed from the popup or Settings › Websites, with versions and updates. Site packs contain no JavaScript
* Website settings and the site pack are kept apart: yours win, and each can be removed on its own
* The AI assistant: Apple Intelligence with no key, or your own key for Claude, OpenAI, Gemini or DeepSeek; per-tool permissions; memory; token usage
* Visual, visual-line and caret modes for selecting text with vim motions; find text on the page
* The app and the extension in eleven languages

### v1.5.5
* Bug fix

### v1.5.4
* Option to open search bar result in a new or existing tab
* Option to start in Insert mode
* Bug fix

### v1.5.3
* Option to open a new tab with home page
* Bug fix

### v1.5.2
* Supports AI Assistants (e.g. Chat GPT, Gemini, DeepSeek, Perplexity) in Search Bar for translation and summarization of web pages

### v1.5.1
* Search engine option includes DuckDuckGo and Google

### v1.5.0
*3 Aug 2024*
* 'o' key will open Search Bar. In Search Bar, you can search website, tabs and history, and open the website in new tab
* 'shift+z' key will undo closed tab

### v1.4.9
*18 Mar 2024*
* Website specific dark mode settings

### v1.4.8
*16 Mar 2024*
* Link hints customization

### v1.4.7
*4 Mar 2024*
* Bugfix

### v1.4.6
*15 Jan 2024*
* Scroll enhancement
* Bugfix

### v1.4.5
*9 Jan 2024*
* Settings UI enhancement
* Bugfix

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

