window.onload = function () {
    const guideItems = document.querySelectorAll('.guide-item')
    const contentList = document.querySelectorAll('#app .content>section')
    const loginItem = document.getElementById('login-item')

    for (var i = 0; i < guideItems.length; i++) {
        guideItems[i].index = i;
        guideItems[i].addEventListener('touchend',function () {
            for (var j = 0; j < contentList.length; j++) {
                contentList[j].className = ''
                guideItems[j].className='guide-item'
            }
            var index = this.index
            contentList[index].className='on'
            this.className = 'guide-item on'
        })


    }

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },

    });

    /*点击进入登录页面*/
    const loginIn = document.getElementById('loginIn')
    const footer = document.getElementsByClassName('footer')
    loginIn.addEventListener('touchend', function () {
        for (var i = 0; i < guideItems.length; i++) {
            contentList[i].className = ''
            guideItems[i].className='guide-item'
        }
        loginItem.className = 'login-item on'
        footer[0].className = 'footer'
    })

    /*登录页面 短信登录与密码登录的切换*/

    const tabs = document.querySelectorAll('.loginTitle .title')
    const loginContents = document.querySelectorAll('.login-flex .loginContent')
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].index = i
        tabs[i].addEventListener("touchend",function () {
            for (var j = 0; j < loginContents.length; j++) {
                tabs[j].className= 'title'
                loginContents[j].className = 'loginContent'
            }
            const index = this.index
            this.className="title active"
            loginContents[index].className="loginContent active"
        })

    }

    /*登录注册页面的回退按钮*/
    
    const goBack = document.querySelector('#login-item .iconfont')

    goBack.addEventListener('touchend',function () {
        loginItem.className = 'login-item'
        footer[0].className = 'footer on'
        Array.prototype.slice.call(guideItems)
        Array.prototype.slice.call(contentList)
        contentList[0].className = 'on'
        guideItems[0].className='guide-item on'
    })
}
