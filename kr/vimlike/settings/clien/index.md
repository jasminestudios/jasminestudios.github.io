---
layout: default
---
[_metadata_:apple-itunes-app]:- "app-id=1584519802"

# Vimlike 클리앙 웹사이트 설정

- [소개](#소개)
- [설치](#설치)
- [다운로드](#다운로드)
- [CSS 스타일시트](#CSS 스타일시트)
- [자바스크립트](#자바스크립트)

## 소개
Vimlike는 Chrome의 Vimium처럼 키보드로 웹 브라우징을 할 수 있도록 해주는 사파리 확장 앱입니다. Vimlike는 macOS, iPadOS 및 iOS를 지원합니다. 

Vimlike는 특정 웹사이트에 추가적으로 CSS 스타일시트나 자바스크립트를 설정하는 것이 가능합니다. 클리앙 웹사이트 설정 파일은 클리앙 사이트에 메뉴를 숨기거나 광고를 흑백으로 흐리게 표시하여 다른 부수적인 내용에 방해받지 않고 사용자가 좀 더 컨텐츠에 집중할 수 있도록 만들어졌습니다.

<img src="/Resources/vimlike/settings/clien-contents.png" width="1024"/>
    
클리앙 확장 설정은 Vimlike의 기본 기능인 키보드 매핑으로 웹 브라우징 하는 것 이외에 추가적으로, 클리앙에 특화된 바로가기 키를 사용할 수 있습니다. Vimlike의 바로가기 키보드 매핑과 클리앙 웹사이트 설정을 사용하면, 터치패드나 아이패드의 화면을 터치하지 않고, 키보드만으로 클리앙을 매우 쉽게 이용할 수 있습니다. 아래 화면은 Vimlike의 기본 기능인 링크 기능이 활성화된 화면입니다. 

<img src="/Resources/vimlike/settings/clien-link.png" width="560"/>

아래 표는 클리앙 웹사이트 설정에 추가된 바로가기 키입니다. [Vimlike 문서](/vimlike/#key-bindings)를 통해 Vimlike의 기본 바로가기 키를 익힐 수 있습니다.
| Key          |Command|
|:-------------|:----------------------|
| <kbd>]</kbd> | 다음 페이지로 이동|
| <kbd>[</kbd> | 이전 페이지로 이동|
| <kbd>g</kbd> <kbd>h</kbd> | 클리앙 홈페이지로 이동|
| <kbd>g</kbd> <kbd>n</kbd> | 클리앙 새로운 소식 페이지로 이동|
| <kbd>g</kbd> <kbd>j</kbd> | 클리앙 알뜰구매 페이지로 이동|
| <kbd>g</kbd> <kbd>s</kbd> | 클리앙 회원중고장터 페이지로 이동|
| <kbd>g</kbd> <kbd>i</kbd> | 클리앙 아이포니앙 페이지로 이동|
| <kbd>g</kbd> <kbd>m</kbd> | 클리앙 MaClien 페이지로 이동|

클리앙 웹사이트 설정을 적용하면, 기본적으로 클리앙의 왼쪽 메뉴나 오른쪽 로그인 창이 보이지 않고, 이 부분에 macOS의 경우 마우스를 메뉴 영역에 가져 가거나, iPadOS의 경우 해당 영역을 터치하면 메뉴가 표시됩니다.

<img src="/Resources/vimlike/settings/clien-menu.png" width="560"/>

아이패드의 경우, 세로로 돌리면 좌우에 메뉴 영역 없이 컨텐츠가 가득차서 나옵니다. 클리앙 메뉴를 클릭하고 싶은 경우에는, 아이패드를 다시 가로로 돌린 후에 메뉴 영역을 클릭하면 됩니다.

<img src="/Resources/vimlike/settings/clien-portrait.png" width="480"/>

## 다운로드
최근 버전의 Vimlike는 macOS, iPadOS 혹은 iOS 앱스토어에서 다운로드 하실 수 있습니다.

[<img src="/Resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg">](https://itunes.apple.com/app/id1584519802)

클리앙 웹사이트 설정 파일은 [클리앙 웹사이트 설정 파일](https://www.jasminestudios.net/vimlike/settings/www%2Eclien%2Enet%2Evimlike) 링크를 클릭하여 다운로드합니다.

## 설치
1. 링크를 클릭하여 [클리앙 웹사이트 설정 파일](https://www.jasminestudios.net/vimlike/settings/www%2Eclien%2Enet%2Evimlike) 을 다운로드합니다.
2. Vimlike 앱을 실행한 후, 왼편 사이드 바에 Website Settings 메뉴를 선택합니다.
  
    <img src="/Resources/vimlike/settings/clien-website-settings.png" width="720"/>

3. Import 버튼을 클릭한 후, 다운로드한 www.clien.net.vimlike 파일을 선택하고, Trust and Open을 선택합니다. 아래 화면이 나오면 설치가 완료되었습니다.

    <img src="/Resources/vimlike/settings/clien-install-complete.png" width="720"/>

4. Safari로 돌아가서 클리앙으로 들어갑니다.


## CSS 스타일시트
```css
/* 좌측 메뉴 */
div.snb > div {
    opacity: 0.0;
    visibility: hidden;
}
div.snb:hover > div {
    opacity: 1.0;
    visibility: visible;
    transition: 0.25s;
}

/* 상단 메뉴 */
html > body > nav.header_wrap {
    height: 44px;
    opacity: 0;
}
html > body > nav.header_wrap:hover {
    height: 44px;
    opacity: 1.0;
}

html > body > nav.header_wrap > div {
    opacity: 0.0;
    visibility: hidden;
}
html > body > nav.header_wrap:hover > div {
    opacity: 1.0;
    visibility: visible;
}

/* 우측 로그인*/
html > body > div.nav_container > div.aside > div {
    opacity: 0.0;
    visibility: hidden;
}

html > body > div.nav_container > div.aside:hover > div {
    opacity: 1.0;
    visibility: visible;
    transition: 0.25s;
}

/* 하단 메뉴*/
html > body > div.footer_wrap {
    display:none;
}

/* 광고 */
div:has(> div.ad_banner), #hongboInfoList, #coupangAd, .section_list.hongbo {
/*    display: none !important;*/
    opacity: 0.3 !important;
    -webkit-filter: saturate(0%) !important;
}

/* 이동 메뉴 */
.action_box {
    display: none !important;
}

/* 작성자 정보 */
.post_writer {
}

/* 게시판 공지글 */
.list_item.notice {
    display: none !important;
}

/* 운영 알림판 */
.section_list.notice {
    display: none !important;
}

/* 추천글 */
.section_list.recommended {
    margin-left: 0px !important;
}

/* 댓글 링크 없애기 */
.comment_button, strong[data-nick-id] {
    opacity: 0.7;
    pointer-events: none;
    cursor: default;
}

/* 커뮤니티 상단 */
.board_upper_html, .board_upper_image {
    display: none !important;
}

/* 댓글 수, 나의 댓글, 주시글, 내가본글 링크 없애기 */
.list_reply, .list_author, .board_block, .button_recent, .tooltip, .button-dark, .text-large
{
    pointer-events: none;
    cursor: default;
}

/* 이미지 닉 흑백으로 */
a.nickname > img {
    -webkit-filter: saturate(0%) !important;
    opacity: 0.5 !important;
}

/* 신고 / 공유 버튼 */
.post_button {
    -webkit-filter: saturate(0%) !important;
    opacity: 0.5 !important;
}

/* 바로 가기 */
.list_category.quick_link {
    display: none !important;
}

/* 본문 */
html > body > div.nav_container > div.nav_body, html > body > div.nav_container > div.content_main {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    z-index: 10;
    border-radius: 15px;
    overflow:hidden;
    margin-bottom:54px;
}

html > body > div.nav_container {
    margin-top: 5px;
}

@media (prefers-color-scheme: dark) {
    html > body > div.nav_container > div.nav_body, html > body > div.nav_container > div.content_main {
        box-shadow: rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px;
    }
}

@media (orientation: portrait) {
    div.snb {
        display:none;
    }
    
    html > body > div.nav_container > div.aside {
        display:none;
    }
    
    html, .nav_body, .content_main, .nav_container, .header_wrap, .footer_wrap {
        width: 1240px !important;
        min-width: 1240px !important;
    }

    .nav_content, .content_view, .content_list, .list_category  {
        width: 1213px !important;
        min-width: 1213px !important;
    }
}
```


## 자바스크립트

```javascript
// clien

// Home
settings.map('g h', function(vimlike) {
    window.open('https://www.clien.net', '_self');
});

// News
settings.map('g n', function(vimlike) {
    window.open('https://www.clien.net/service/board/news', '_self');
});

// 아이포니앙
settings.map('g i', function(vimlike) {
    window.open('https://www.clien.net/service/board/cm_iphonien', '_self');
});

// 주식한당
settings.map('g k', function(vimlike) {
    window.open('https://www.clien.net/service/board/cm_stock', '_self');
});

// MaClien
settings.map('g m', function(vimlike) {
    window.open('https://www.clien.net/service/board/cm_mac', '_self');
});

// 알뜰구매
settings.map('g j', function(vimlike) {
    window.open('https://www.clien.net/service/board/jirum', '_self');
});

// 회원중고장터
settings.map('g s', function(vimlike) {
    window.open('https://www.clien.net/service/board/sold', '_self');
});


// 모두의 공원
settings.map('g c', function(vimlike) {
    window.open('https://www.clien.net/service/group/community', '_self');
});


// Go to next page
settings.map('bracketright', function(vimlike) {
    try {
        var e = document.getElementsByClassName('board-nav-page active')[0].nextElementSibling;
        if (e == null) {
            e = document.getElementsByClassName('board-nav-page active')[0].parentElement.nextElementSibling;
        }
        if (e != null) {
            e.click();
        }
    } catch (e) {
    }
});

// Go to previous page
settings.map('bracketleft', function(vimlike) {
    try {
        var e = document.getElementsByClassName('board-nav-page active')[0].previousElementSibling;
        if (e == null) {
            e = document.getElementsByClassName('board-nav-page active')[0].parentElement.previousElementSibling;
        }
        if (e != null) {
            e.click();
        }
    } catch (e) {
    }
});

settings.map('m', function(vimlike) {
    var head = document.evaluate('/html/head', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var meta = document.evaluate('/html/head/meta[contains(@name, "viewport")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if (meta == null) {
        meta = document.createElement('meta');
        if (head != null) {
            head.appendChild(meta);
        }
    }
    
    let content = meta.getAttribute('content');
    
    if (content != null && content.indexOf("initial-scale=1.3") > -1) {
        meta.setAttribute("content", "width=device-width, initial-scale=1.0");
    } else {
        meta.setAttribute("content", "width=device-width, initial-scale=1.3");
    }
});
```
