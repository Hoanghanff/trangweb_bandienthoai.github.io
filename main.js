var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var app = {

    // random linear grayan
    backgroundColorLinear: function () {
        let colorDeg = 0;
        var backgroundColorHeader = function () {
            $('.header').style = `--deg:${colorDeg}deg`;
            colorDeg += 20;
            if (colorDeg >= 360) {
                colorDeg = 0;
            }
        }
        setInterval(backgroundColorHeader, 1000);
    },

    // random img content header  
    runBackgroundImage: function () {
        let index = 1;
        var onChange = function () {
            var imgs = ["./css/img/ip-14-5.webp", "./css/img/samsung-bg.webp", "./css/img/ip14-8.jpg",]
            $('.content__background').style.backgroundImage = `url(${imgs[index]})`;
            index++;
            if (index == 3) {
                index = 0;
            }
        }
        setInterval(onChange, 4000);
    },

    // notication slider 
    noticationSlide: function () {
        let countTransfrom = 200;
        var promotionSlide = function () {
            countTransfrom -= 50;
            $('.box-text-list').style.transform = `translateX(${countTransfrom + 'px'})`;
            if (countTransfrom === -2500) {
                countTransfrom = 200;
            };
        }
        setInterval(promotionSlide, 1000);
    },

    // responsive menu tablet mobile
    responsiveMenu: function () {
        let menuContainer = $('.menu-container');
        let clickMenu = $('.mobile-menu');
        let listMenu = $('.menu-list');

        clickMenu.addEventListener('click', function () {
            if ((listMenu.style.transform == 'translateX(-100%)')) {
                menuContainer.style.transform = 'translateX(0)';
                listMenu.style.transform = 'translateX(0)'
                clickMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
                $$('.menu-list__item.none').forEach(element => {
                    element.style.display = 'block'
                })
            } else if (!(listMenu.style.transform == 'translateX(-100%)')) {
                listMenu.style.transform = 'translateX(-100%)';
                clickMenu.innerHTML = ' <i class="fa-solid fa-bars"></i>'
                menuContainer.style.transform = 'translateX(-100%)';
                $$('.menu-list__item.none').forEach(element => {
                    element.style.display = 'none'
                });
            }
        });

        $('.menu-list').addEventListener('click', function (e) {
            e.stopPropagation();
        });
        menuContainer.addEventListener('click', function (e) {
            menuContainer.style.transform = 'translateX(-100%)';
            listMenu.style.transform = 'translateX(-100%)';
            clickMenu.innerHTML = ' <i class="fa-solid fa-bars"></i>'
            e.stopPropagation();
        });


    },

    // auto video cellphone 

    animationVideo: function () {
        let widthScroll = $$('.scrol-item');
        let active = $('.active');
        let listVideo = $$('.video');
        let count = 0;
        function renderVideo() {
            let video = listVideo[count];
            let scrolItem = widthScroll[count];
            const newWidth = widthScroll[count].offsetWidth;
            const newLeft = widthScroll[count].offsetLeft;
            active.style.width = newWidth + 'px';
            active.style.left = newLeft + 'px';
            $('.video.active-page').classList.remove('active-page');
            video.classList.add('active-page');
            count++;
            if (count == 5) {
                count = 0;
            }
            $('.scrol-item.active-bg').classList.remove('active-bg')
            scrolItem.classList.add('active-bg');
        }
        setInterval(renderVideo, 7000);
        
        widthScroll.forEach((element, index) => {
            let video = listVideo[index];
            element.onclick = function () {
                const newWidth = this.offsetWidth;
                const newLeft = this.offsetLeft;
                active.style.width = newWidth + 'px';
                active.style.left = newLeft + 'px';

                $('.video.active-page').classList.remove('active-page');
                video.classList.add('active-page');

                $('.scrol-item.active-bg').classList.remove('active-bg')
                element.classList.add('active-bg');
            }
        });
    },

    // click heart red 
    clickHeart: function () {
        let listHeart = $$('.heart');
        listHeart.forEach(element => {
            element.onclick = function () {
                this.classList.toggle('red');
            }
        });
    },

    // scroll product cellphone
    scrollBar: function () {
        let btnLeftIp = $('.js-left-iphone');
        let btnLeftSS = $('.js-left-samsung');
        let btnLeftOp = $('.js-left-oppo');
        let btnRightIP = $('.js-right-iphone');
        let btnRightSS = $('.js-right-samsung');
        let btnRightOp = $('.js-right-oppo');
        const scrollIP = $('.js-scroll-iphone');
        const scrollSs = $('.js-scroll-samsung');
        const scrollop = $('.js-scroll-oppo');

        btnRightIP.onclick = function () {
            scrollIP.scrollLeft += 260;
        }
        btnLeftIp.onclick = function () {
            scrollIP.scrollLeft -= 260;
        }
        btnRightSS.onclick = function () {
            scrollSs.scrollLeft += 260;
        }
        btnLeftSS.onclick = function () {
            scrollSs.scrollLeft -= 260;
        }
        btnRightOp.onclick = function () {
            scrollop.scrollLeft += 260;
        }
        btnLeftOp.onclick = function () {
            scrollop.scrollLeft -= 260;
        }
        let count = 0;
        setInterval(function () {
            count++;
            if (count <= 5) {
                btnRightIP.click();
                btnRightSS.click();
                btnRightOp.click();
            } else if (count <= 10) {
                btnLeftIp.click();
                btnLeftSS.click();
                btnLeftOp.click();
            } else {
                count = 0
            }
        }, 5000);

        // btnRightIP.onmousemove = function () {
        //     btnRightIP.style.color = 'red';
        // }
        // btnRightIP.onmouseout = function () {
        //     btnRightIP.style.color = 'blue';
        // }
    },

    // login Modal show
    ModalLogIn: function () {
        let lognIn = $('.js_lognIn');
        let lognUp = $('.js_lognUp');
        let modal = $('.modal');
        let modalLognUp = $('.modal-lognUp');
        let modalLognIn = $('.modal-lognIn');
        let btnUp = $('.js-btn-Up');
        let btnIn = $('.js-btn-In');

        function ShowLogIn() {
            modal.style.display = 'flex';
            modalLognIn.style.display = 'flex';
            modalLognUp.style.display = 'none';
        }
        function ShowLogUp() {
            modal.style.display = 'flex';
            modalLognUp.style.display = 'flex';
            modalLognIn.style.display = 'none';

        }
        lognIn.addEventListener('click', ShowLogIn);
        lognUp.addEventListener('click', ShowLogUp);
        btnUp.addEventListener('click', ShowLogIn);
        btnIn.addEventListener('click', ShowLogUp);
        modal.addEventListener('click', function () {
            modal.style.display = 'none';
            modalLognUp.style.display = 'none';
            modalLognIn.style.display = 'none';
        });
        modalLognUp.addEventListener('click', function (e) {
            e.stopPropagation();
        })
        modalLognIn.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    },

    // show contact and start top 
    showContacts: showContact = function () {
        let getFixedContact = $('.fixed-contact');
        if (getFixedContact.offsetHeight == 4) {
            getFixedContact.style.height = 186 + 'px';
        } else {
            getFixedContact.style.height = 4 + 'px'
        }
    },
    // double click up Top;

    // scroll start animation
    scrollStartAnimation: function () {
        let ObServer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        });
        let listHidden = $$('.animationTop');
        listHidden.forEach(element => {
            ObServer.observe(element);
        });

        let activelegs = $$('.menu-list__item');
        activelegs.forEach(activeleg => {
            activeleg.onclick = function () {
                $('.menu-list__item.menu-list__item--view').classList.remove('menu-list__item--view');
                activeleg.classList.add('menu-list__item--view');
            }
        })


    },

    start: function () {
        this.backgroundColorLinear();

        this.runBackgroundImage();

        this.noticationSlide();

        this.responsiveMenu();

        this.animationVideo();

        this.clickHeart();

        this.scrollBar();

        this.ModalLogIn();

        this.scrollStartAnimation();

    }
};
app.start();
var upTop = function () {
    document.documentElement.scrollTop = 0
}
// handle loading start app 
var handleLoading = function () {
    $('.onloading').style.display = 'flex';
    // $('.content').style.display = 'none';

    setTimeout(() => {
        $('.onloading').style.display = 'none';
    }, 2000);

    // setTimeout(() => {
    //     $('.content').style.display = 'block';
    // }, 2000);
}

// handleLoading();
function ShowTablet() {
    let heightTablet = $('.js-tablet');
    let btnjs = $('.js-btn-tablet');
    if (heightTablet.offsetHeight === 460) {
        heightTablet.style.height = 'auto';
        btnjs.textContent = 'Thu Gọn';
    } else {
        heightTablet.style.height = 460 + 'px';
        btnjs.textContent = 'Xem Tất Cả ';
    }
}
function ShowLabtop() {
    let heightLaptop = $('.js-laptop');
    let btnjs = $('.js-btn-laptop');

    if (heightLaptop.offsetHeight === 460) {
        heightLaptop.style.height = 'auto';
        btnjs.textContent = 'Thu Gọn';
    } else {
        heightLaptop.style.height = 460 + 'px';
        btnjs.textContent = 'Xem Tất Cả';
    }
}

let cnt = 0;
let index = 1250;
var scrollPrice = function () {
    let imgItem = $$('.img-item');
    for (let i = 0; i < imgItem.length; i++) {
        imgItem[i].style.transform = `translateX(${index + 'px'})`;
    }
    if (cnt < 4) {
        ++cnt;
        index -= 625;
    }
    else if (cnt => 4) {
        index = 1250;
        cnt = 0;
    }

}
setInterval(scrollPrice, 4000);

let apps = $('.content');
let listOp = $('.list-product-oppo');
let listIp = $('.list-product-iphone');
let listSs = $('.list-product-samsung');


function listIP() {
    apps.style.display = 'none';
    listOp.style.display = 'none';
    listSs.style.display = 'none';

    listIp.style.display = 'block';
    handleLoading();
    upTop();
}

function listSS() {
    apps.style.display = 'none';
    listOp.style.display = 'none';
    listSs.style.display = 'block';

    listIp.style.display = 'none';
    handleLoading();
    upTop();
}

function listOP() {
    apps.style.display = 'none';
    listOp.style.display = 'block';
    listSs.style.display = 'none';
    listIp.style.display = 'none';
    handleLoading();
    upTop();

}

function showNone() {
    apps.style.display = 'block';
    listOp.style.display = 'none';
    listSs.style.display = 'none';
    listIp.style.display = 'none';
    handleLoading();
    upTop();
}


var getTime = function () {
    let hour = $('.hour');
    let minutes = $('.minutes');
    let seconds = $('.seconds');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    hour.innerText = h;
    minutes.innerHTML = m;
    seconds.innerText = s;
}
setInterval(getTime, 1000);