- [Getting Started](#getting-started)
- [Downloads](#downloads)
- [Key Bindings](#key-bindings)
- [Commands](#commands)

## Getting Started
  ![Screen Shot](/Resources/swift-browser-screen-01.jpg)

## Downloads
The latest version of Swift Browser is available in AppStore

## Key Bindings
### In-page navigation

| Key          |Command|
|:-------------|:----------------------|
| <kbd>k</kbd> or <kbd>&uarr;</kbd>| Scroll up|
| <kbd>j</kbd> or <kbd>&darr;</kbd>| Scroll down|
| <kbd>h</kbd> or <kbd>&larr;</kbd>| Scroll left|
| <kbd>l</kbd> or <kbd>&rarr;</kbd>| Scroll right|
| <kbd>u</kbd> or<br/><kbd>option</kbd> + <kbd>&uarr;</kbd> | Scroll up half page|
| <kbd>d</kbd> or<br/><kbd>option</kbd> + <kbd>&darr;</kbd> | Scroll down half page|
| <kbd>t</kbd> or<br/><kbd>command</kbd> + <kbd>&uarr;</kbd>  | Go to top of page|
| <kbd>b</kbd> or<br/><kbd>command</kbd> + <kbd>&darr;</kbd>  | Go to bottom of page|
| <kbd>y</kbd> | Zoom in|
| <kbd>tab</kbd> or<br/><kbd>n</kbd> | Toggle links / Move to next link or search result|
| <kbd>shift</kbd> + <kbd>tab</kbd> or<br/><kbd>shift</kbd> + <kbd>n</kbd> | Toggle links / Move to previous link or search result|
| <kbd>esc</kbd> or<br/><kbd>command</kbd> + <kbd>`</kbd> or <kbd>§</kbd> | Back to View mode|


### Tab navigation

| Key          | Command           |
|:-------------|:------------------|
| <kbd>g</kbd> | Go back |
| <kbd>;</kbd> | Go forward |
| <kbd>command</kbd> + <kbd>j</kbd> | Move to previous tab |
| <kbd>command</kbd> + <kbd>k</kbd> | Move to next tab |
| <kbd>command</kbd> + <kbd>t</kbd> | New tab |
| <kbd>command</kbd> + <kbd>w</kbd> | Close tab |
| <kbd>command</kbd> + <kbd>r</kbd> | Reload |
| <kbd>command</kbd> + <kbd>b</kbd> | Show tabs |
| <kbd>command</kbd> + <kbd>y</kbd> | Show history |
| <kbd>command</kbd> + <kbd>z</kbd> | Undo close tab |
| <kbd>command</kbd> + <kbd>1</kbd> ... <kbd>9</kbd> | Open tab 1...9 |
| <kbd>option</kbd> + <kbd>1</kbd> ... <kbd>9</kbd> | Open bookmark 1...9 |

### Address bar

| Key          | Command           |
|:---------------------|:--------------------------|
| <kbd>command</kbd> + <kbd>l</kbd> | Open address |
| <kbd>:</kbd> | Open command |
| <kbd>/</kbd> or<br/><kbd>command</kbd> + <kbd>f</kbd> | Search in page |

## Commands
  ![Screen Shot](/Resources/swift-browser-screen-02.jpg)

### ping
**ping** sends ICMP packets to network hosts. **ping** allows a user to verify that a particular IP address exists and can accept requests
#### usage
```
ping target_name | target_address
```

#### example
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
