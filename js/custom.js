function typeText(target) {
    var txt = target.textContent;
    var idx = 0;

    target.innerHTML = "";

    var typing = () => {
        target.innerHTML += txt[idx];
        idx++;

        if (idx > txt.length) {
            target.innerHTML = "";
            idx = 0;
        }
    }

    setInterval(typing, 350);
}

function dateLapse(year, month, date) {
    var base = new Object ({
        year: year,
        month: month,
        date: date,
    })
    var currDate = new Date();
    var year = currDate.getFullYear() - base.year;
    var month = currDate.getMonth() + 1 - base.month;
    var date = currDate.getDate() - base.date;

    return currDate.getDate() <= base.date ? `경력 ${year}년 ${month}개월` : `경력 ${year}년 ${month}개월 ${date}일`
}

function tabFunc(){
    var tabBtns = document.querySelectorAll('[tab-btn]');

    tabBtns.forEach(els => {
        var btns = els.querySelectorAll('.btn:not([no-tab])');
        var target = document.querySelector(`[tab-target = '${els.getAttribute('tab-btn')}']`)
        var tabs = target.querySelectorAll('.tab');

        btns.forEach((el, idx) => {
            el.addEventListener("click", function(){
                // btn 상태 초기화
                btns.forEach(el => {
                    el.classList.remove('on');
                })
                // tab 상태 초기화
                tabs.forEach(el => {
                    el.classList.remove('on');
                })

                el.classList.add("on");
                tabs[idx].classList.add("on");
            })
        })
    })
}

function navigationColor(){
    
}