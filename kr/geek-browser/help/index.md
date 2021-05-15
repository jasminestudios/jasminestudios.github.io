- [소개](#소개)
- [다운로드](#다운로드)
- [키보드 단축키](#키보드-단축키)
- [명령어](#명령어)

# 소개
Geek Browser는 VIM 단축키와 명령어를 지원하는 키보드 중심의 아이패드용 웹브라우저입니다.

  ![Screen Shot](/Resources/GeekBrowser01.jpg)

* **VIM 명령어와 단축키 지원**: Geek Browser는 키보드로 웹브라우징을 하도록 디자인되었습니다. 키보드로 웹페이지를 브라우징하고 링크를 열고 명령어를 실행할 수 있습니다.
* **다크모드**: 웹페이지를 다크모드로 브라우징할 수 있습니다.
* **명령어**: 명령어를 실행하여 자바스크립트를 실행하거나, ping, ifconfig, 검색 등의 명령을 실행할 수 있습니다.
* **광고 차단**: Geek Browser는 광고차단 기능을 탑재하고 있습니다.
* 
# 다운로드
Geek Browser는 앱스토어를 통해 다운로드할 수 있습니다.

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1457482155)

# 키보드 단축키
## 키보드 단축키 목록 (디폴트)
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
| <kbd>command</kbd> + <kbd>1</kbd> ... <kbd>9</kbd> | Open tab 1...9 |
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
Geek Browser supports navigating the web pages with the keyboard. When you type <kbd>tab</kbd> or <kbd>n</kbd>, Geek Browser shows the link tags. You can type <kbd>tab</kbd> / <kbd>n</kbd>, or <kbd>shift</kbd> + <kbd>tab</kbd> / <kbd>shift</kbd> + <kbd>n</kbd> to move the focus to the next link or the previous link. And you press enter to open the link. Otherwise, type the tag code or number to open the link directly.

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
