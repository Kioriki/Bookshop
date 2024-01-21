

document.addEventListener('DOMContentLoaded', function(){
    

    const catNav = document.querySelector('.categories');
    const dotCatItem = Array.from(catNav.querySelectorAll('li'));
    let catIndex = 0;

    const tabsNav = document.querySelector('.tabs-nav');
    const tabsItem = Array.from(tabsNav.querySelectorAll('li'));
    let tabsIndex = 0;

    

   
   

    dotCatItem.forEach((catItem, catIndex) => {
        catItem.addEventListener('click', function() {
        updateCatNav(catIndex);
        });
        })


    tabsItem.forEach((tabsItem, tabsIndex) => {
        tabsItem.addEventListener('click', function() {
            updateTabsNav(tabsIndex);
        });
        })


   

    function navItemClick (){
        updateSlider();
        updateDotNav();
    }

    


    


    function updateCatNav(catIndex) {
        dotCatItem.forEach((item, index) => {
            if (index === catIndex) {
                item.classList.add('categories-select-active');
            } else {
                item.classList.remove('categories-select-active');
            }
        }); 
    }

    function updateTabsNav(tabsIndex) {
        tabsItem.forEach((item2, index2) => {
            if (index2 === tabsIndex) {
                item2.classList.add('tabs-nav-active');
            } else {
                item2.classList.remove('tabs-nav-active');
            }
        }); 
    }

// таймер

    
})



