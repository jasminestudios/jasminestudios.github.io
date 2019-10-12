[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1457482155)

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Key Bindings](#key-bindings)
  - [In-page navigation](#in-page-navigation)
  - [Tab navigation](#tab-navigation)
  - [Address bar](#address-bar)
- [Commands](#commands)

# Introduction
Geek Browser is a faster web browser with a VIM-like keyboard access.

  ![Screen Shot](/Resources/swift-browser-screen-03.jpg)

* **VIM-like full keyboard access**: Geek Browser is designed to browse with the keyboard. You can navigate a page, type a link, and execute a command with the keyboard.
* **Darkmode**: Browse the web with the dark mode CSS.
* **Command**: Type the command and execute javascript, ping, ifconfig, search and more.
* **Built-in Adblock**: Geek Browser has a built-in Adblock.

# Downloads
The latest version of Geek Browser is available in AppStore:

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1457482155)

# Key Bindings
## Cheatsheet (Default)
  ![Screen Shot](/Resources/keyboard_default.jpg) 

| Key          |Command|
|:-------------|:----------------------|
| <kbd>k</kbd> or <kbd>&uarr;</kbd>| Scroll up|
| <kbd>j</kbd> or <kbd>&darr;</kbd>| Scroll down|
| <kbd>h</kbd> or <kbd>&larr;</kbd>| Scroll left|
| <kbd>l</kbd> or <kbd>&rarr;</kbd>| Scroll right|
| <kbd>g</kbd> or <kbd>command</kbd> + <kbd>&uarr;</kbd>  | Go to top of page|
| <kbd>shift</kbd> + <kbd>g</kbd> or <kbd>command</kbd> + <kbd>&darr;</kbd>  | Go to bottom of page|
| <kbd>y</kbd> | Zoom in|
| <kbd>shift</kbd> + <kbd>y</kbd> | Zoom out to default (100%)|
| <kbd>tab</kbd> or <kbd>n</kbd> | Toggle links / Move to next link or search result|
| <kbd>shift</kbd> + <kbd>tab</kbd> or <kbd>shift</kbd> + <kbd>n</kbd> | Toggle links / Move to previous link or search result|
| <kbd>esc</kbd> or <kbd>`</kbd> or<br/><kbd>§</kbd> (configurable in Settings) | Back to View mode|
| <kbd>shift</kbd> + <kbd>h</kbd> | Go back |
| <kbd>shift</kbd> + <kbd>l</kbd> | Go forward |
| <kbd>o</kbd> or <kbd>command</kbd> + <kbd>l</kbd> | Open address |
| <kbd>shift</kbd> + <kbd>;</kbd> | Open command |
| <kbd>/</kbd> or <br/><kbd>command</kbd> + <kbd>f</kbd> | Search in page |


## Cheatsheet (+Command)
  ![Screen Shot](/Resources/keyboard_command.jpg) 

| Key          | Command           |
|:-------------|:------------------|
| <kbd>command</kbd> + <kbd>j</kbd> | Move to previous tab |
| <kbd>command</kbd> + <kbd>k</kbd> | Move to next tab |
| <kbd>command</kbd> + <kbd>t</kbd> | New tab |
| <kbd>command</kbd> + <kbd>w</kbd> | Close tab |
| <kbd>command</kbd> + <kbd>r</kbd> | Reload |
| <kbd>command</kbd> + <kbd>b</kbd> | Show tabs |
| <kbd>command</kbd> + <kbd>y</kbd> | Show history |
| <kbd>command</kbd> + <kbd>z</kbd> | Undo close tab |
| <kbd>command</kbd> + <kbd>m</kbd> | Toggle Private / Normal mode |
| <kbd>command</kbd> + <kbd>i</kbd> | Open Share... |
| <kbd>command</kbd> + <kbd>+</kbd> | Increase text size |
| <kbd>command</kbd> + <kbd>-</kbd> | Decrease text size |
| <kbd>command</kbd> + <kbd>0</kbd> | To default text size (100%) |
| <kbd>/</kbd> or <br/><kbd>command</kbd> + <kbd>f</kbd> | Search in page |


## Cheatsheet (+Control)
  ![Screen Shot](/Resources/keyboard_control.jpg) 

| Key          |Command|
|:-------------|:----------------------|
| <kbd>control</kbd> + <kbd>u</kbd> | Scroll up half page|
| <kbd>control</kbd> + <kbd>d</kbd> | Scroll down half page|
| <kbd>control</kbd> + <kbd>f</kbd> or <kbd>option</kbd> + <kbd>&uarr;</kbd> | Scroll up a page|
| <kbd>control</kbd> + <kbd>b</kbd> or <kbd>option</kbd> + <kbd>&darr;</kbd> | Scroll down a page|
| <kbd>control</kbd> + <kbd>1</kbd> ... <kbd>9</kbd> | Open bookmark 1...9 |

# Links
Geek Browser supports navigating the web pages with the keyboard. When you type <kbd>tab</kbd> or <kbd>n</kbd>, Geek Browser shows the link tags. You can type <kbd>tab</kbd> / <kbd>n</kbd>, or <kbd>shift</kbd> + <kbd>tab</kbd> / <kbd>shift</kbd> + <kbd>n</kbd> to move the focus to the next link or the previous link. And you press enter to open the link. Otherwise, type the tag number to open the link directly.

  ![Screen Shot](/Resources/links.gif)

# Commands
Geek Browser supports command line interface in its address bar. Command starts with <kbd>:</kbd>. When you type <kbd>:</kbd> in the address bar, Geek Browser shows the console. You can type the command and press enter to execute the command.
  ![Screen Shot](/Resources/commands.gif)

## ping
**ping** sends ICMP packets to network hosts. **ping** allows a user to verify that a particular IP address exists and can accept requests.
#### usage:
```
ping target_domain | target_ip
```

#### example:
```
[20/4/2019, 5:55 PM] $ :ping www.google.com
PING www.google.com (216.58.220.196): 56 data bytes
64 bytes from 216.58.220.196: icmp_seq=0 times=5ms
64 bytes from 216.58.220.196: icmp_seq=1 times=4ms
64 bytes from 216.58.220.196: icmp_seq=2 times=6ms
64 bytes from 216.58.220.196: icmp_seq=3 times=5ms
64 bytes from 216.58.220.196: icmp_seq=4 times=5ms
--- www.google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
```


## ifconfig
**ifconfig** shows the network configuration.

#### usage:
```
ifconfig
```

#### example:
```
[20/4/2019, 5:55 PM] $ :ifconfig
lo0: inet 127.0.0.1
lo0: inet6 ::1
lo0: inet6 fe80::1%lo0
en0: 192.168.1.2
```

## tab
**tab** command shows, opens, and closes tabs. 

#### usage:
```
tab list
tab open tab_index
tab close tab_index | all
```

#### example:
```
[20/4/2019, 5:55 PM] $ :tab list

[20/4/2019, 5:56 PM] $ :tab open 1

[20/4/2019, 5:57 PM] $ :tab close 3

[20/4/2019, 5:58 PM] $ :tab close all
```

## google
**google** command searches the keyword with Google.

#### usage:
```
google [-image] keyword
```

#### example:
```
[20/4/2019, 5:55 PM] $ :google black hole

[20/4/2019, 5:56 PM] $ :google -image black hole
```

## javascript
**javascript** command executes javascript.

#### usage:
```
javascript script
```

#### example:
```
[20/4/2019, 5:55 PM] $ :javascript document.URL;
result: https://www.google.com/

[20/4/2019, 5:56 PM] $ :javascript document.body.style.backgroundColor = "#ff0000";
result: ff0000
```

## source
**source** command shows the page source.

#### usage:
```
source
```

#### example:
```
[20/4/2019, 5:55 PM] $ :source

```

## cookies
**cookies** command shows the cookies.

#### usage:
```
cookies
```

#### example:
```
[20/4/2019, 5:55 PM] $ :cookies

```

## settings
**set** command writes settings and **get** command reads settings.

#### usage:
```
set key=value
get key

set toolbar=always | autohide
set darkmode=true | false
set desktopmode=true | false
set adblock=true | false
```

#### example:
```
[20/4/2019, 5:55 PM] $ :set toolbar=alawys

[20/4/2019, 5:56 PM] $ :get toolbar
toolbar=always
```
