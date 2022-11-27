---
layout: default
---
[_metadata_:apple-itunes-app]:- "app-id=1584519802"

# 클리앙 커스텀 CSS / 자바스크립트

- [소개](#소개)
- [설치](#설치)

## 소개
* Vimlike는 Chrome의 Vimium처럼 vim키 매핑으로 웹 브라우징을 할 수 있도록 해주는 사파리 확장 앱입니다. 클리앙 확장 설정이 적용된 클리앙 홈페이지는 아래처럼 나옵니다.    
    <img src="/Resources/vimlike/settings/clien-home.png" width="720"/>
    
* 클리앙 확장 설정은 컨텐츠를 읽는데 초점을 맞출 수 있도록 만들었습니다. 본문 페이지는 아래처럼 나옵니다.
    <img src="/Resources/vimlike/settings/clien-article.png" width="720"/>

* Vimlike의 기본 기능인 링크 기능이 활성화된 화면입니다.
    <img src="/Resources/vimlike/settings/clien-link.png" width="720"/>

클리앙의 왼쪽 메뉴나 오른쪽 로그인 창 부분은 macOS의 경우 마우스를 메뉴 영역에 가져 가거나, iPadOS의 경우 해당 영역으 터치하면 나오게 됩니다.
    <img src="/Resources/vimlike/settings/clien-menu.png" width="720"/>

아이패드의 경우, 세로로 돌리면 좌우에 메뉴 영역 없이 컨텐츠가 가득차서 나옵니다.
    <img src="/Resources/vimlike/settings/clien-portrait.png" width="560"/>

## 설치
1. 링크를 클릭하여 클리앙 [vimlike 파일](https://www.jasminestudios.net/vimlike/settings/www%2Eclien%2Enet%2Evimlike) 을 다운로드합니다.
2. Vimlike 앱을 실행한 후, 왼편 사이드 바에 Website Settings 메뉴를 선택합니다.
  
    <img src="/Resources/vimlike/settings/clien-website-settings.png" width="720"/>

3. Import 버튼을 클릭한 후, 다운로드한 www.clien.net.vimlike 파일을 선택하고, Trust and Open을 선택합니다. 아래 화면이 나오면 설치가 완료되었습니다.

    <img src="/Resources/vimlike/settings/clien-install-complete.png" width="720"/>

4. Safari로 돌아가서 클리앙으로 들어갑니다.


## CSS
```css
/* 좌측 메뉴 */
div.snb {
}

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
    display: none !important;
    opacity: 0.5 !important;
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

/*.main {*/
/*    justify-content: center;*/
/*}*/

/*.nav_header{*/
/*    width: 100%;*/
/*}*/
/**/
@media (prefers-color-scheme: dark) {
    /*span {
        color: #13A10E !important;
    }*/
    /* 본문 */
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
