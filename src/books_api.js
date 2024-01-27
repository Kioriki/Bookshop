const apiKey = 'AIzaSyDFl9Wsmv_yGX5JfWccU4MwDGUIUYEIEaA';
const countShowCardsClick = 6; // константа! шаг добавления карточек
const loadBooksBtn = document.querySelector(".books__button-more");

const booksCard = document.querySelector('.books__cards');

let productsData = []; //массив данных из json
let shownCards = countShowCardsClick;
let countClickBtnShowCards = 1; //изначальный счетчик карточек на странице

const categoryContent = document.querySelectorAll('.categories-select li');
const categories = [
          {
             name: 'Architecture',
             subject: 'Architecture'
          },
          {
             name: 'Art & Fashion',
             subject: 'Art'
          },
          {
             name: 'Biography',
             subject: 'Biography&Autobiography'
          },
          {
             name: 'Business',
             subject: 'Business'
          },
          {
             name: 'Crafts & Hobbies',
             subject: 'Crafts&Hobbies'
          },
          {
             name: 'Drama',
             subject: 'Drama'
          },
          {
             name: 'Fiction',
             subject: 'Fiction'
          },
          {
             name: 'Food & Drink',
             subject: 'Cooking'
          },
          {
             name: 'Health & Wellbeing',
             subject: 'Health&Fitness'
          },
          {
             name: 'History & Politics',
             subject: 'History'
          },
          {
             name: 'Humor',
             subject: 'Humor'
          },
          {
             name: 'Poetry',
             subject: 'Poetry'
          },
          {
             name: 'Psychology',
             subject: 'Psychology'
          },
          {
             name: 'Science',
             subject: 'Science'
          },
          {
             name: 'Technology',
             subject: 'Technology'
          },
          {
             name: 'Travel & Maps',
             subject: 'Travel'
          },
];


//Обработчик клика на кнопку "load more"
loadBooksBtn.addEventListener('click', loadCards);
//Обработчик клина на добавление в корзину
booksCard.addEventListener('click', handleCardClick);

//создаем переменную в которой храним активную категорию, по умолчанию первая
let currentIndex = 0;
let activeCategory = categories[currentIndex].subject;
   
// Изменение категорий книг
// Указывает какая ссылка активна
// function activeCategories (index) {
//     categoryContent.forEach(item => item.classList.remove('active-item'));
//     categoryContent[index].classList.add('active-item');
    
    
// };
// Вешает клик на cсылки и меняет активную категорию
categoryContent.forEach((link, index) => {
    link.addEventListener('click', () => {
        
        //activeCategories(index);
        currentIndex = index;
        activeCategory = categories[index].subject;
        getResponse(shownCards, true);
    })
});
 

//Получение id из LS
function getBasketLocalStorage() {
    const cartDataJson = localStorage.getItem('basket');
    return cartDataJson ? JSON.parse(cartDataJson) : [];
};

//Запись id товаров в LS
function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.basket__count');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
};






//Установка шага для кнопки load more
function loadCards () {
    countClickBtnShowCards++;
    shownCards = countShowCardsClick * countClickBtnShowCards;
    getResponse(shownCards, false);

};

function handleCardClick (event) {
    const targetButton = event.target.closest('.books__button-btn');
    if (!targetButton) return;

    const card = targetButton.closest('.books__cards');
    const id = card.dataset.productId;
    const basket = getBasketLocalStorage();

    basket.push(id);

    setBasketLocalStorage(basket);
    checkInActiveButtons(basket,card);
};

//изменение кнопки покупки книги
function checkInActiveButtons (basket,card) {
    const buttons = document.querySelectorAll('.books__button-btn');
    
    buttons.forEach(btn => {

        const id = card.dataset.id;
        const isInbasket = basket.includes(id);

        btn.disabled = isInbasket;
        if(isInbasket) {
            btn.classList.add('btn-active');
        }
        
        btn.textContent = isInbasket ? 'IN THE CART' : 'BUY NOW';
        
    });

}

function createCards(result, clear) {
    let cards = '';
//item.volumeInfo.authors - массив


    
    result.forEach (item => {
        const averageRating = item.volumeInfo.averageRating;
     
         let stars = '';
         for (let i = 0; i < averageRating; i++) {
           stars += '<span class="star"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"/></svg></span>';
         }
     
         for (let i = averageRating; i < 5; i++) {
           stars += '<span class="star empty-star"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"/></svg></span>';
         }

        if(item.volumeInfo.description !== undefined){
            var descrSliced = item.volumeInfo.description.slice(0,100);
            if (descrSliced.length < item.volumeInfo.description.length) {
                descrSliced += '...';
            }
        }
        
        const cardBook = `
        <div class="books__card" data-product-id="${item.id}">
            <div class="books__card-image">
                <img class="books__card-img" src="${item.volumeInfo.imageLinks.thumbnail ?? '../img/placeholder.jpg'}">
            </div>
            <div class="books__card-content">
            <p class="books__card-autor">
                ${item.volumeInfo.authors !== undefined ? item.volumeInfo.authors : ''}
            </p>
            <h2 class="books__card-name">
                ${item.volumeInfo.title !== undefined ? item.volumeInfo.title : ''}
            </h2>
            <div class="books__card-reviews">
                <div class="book-rating">
                    ${stars}
                </div>
                <p class="list-books__card--reviews-text">
                    ${item.volumeInfo.ratingsCount !== undefined ? item.volumeInfo.ratingsCount + ' review' : ''}
                    
                </p>
            </div>
            <p class="books__card-description">
                ${item.volumeInfo.description !== undefined ? descrSliced : ''}
            </p>
            <h2 class="books__card-price">
                ${(item.saleInfo.retailPrice?.amount ?? '') + ' ' + (item.saleInfo.retailPrice?.currencyCode ?? '')}
            </h2>
            <button class="books__button-btn">
            buy now
            </button>
            
            </div>
        </div>`;

      cards += cardBook;
    });

    if(clear){
        booksCard.innerHTML = cards;
    }else{
        booksCard.innerHTML = booksCard.innerHTML + cards;
    }
    
    
};

//загрузка книг
getResponse(shownCards, true);

//запрос к серверу
async function getResponse (count, clear) {
  
    const responseApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:"${activeCategory}"&key=${apiKey}&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`)
            .then(response => {
                return response.json();
            })
            .then((json) => {
                return json['items'];
                
            })
            .catch(() => {console.log('error'); 
        });

    createCards(responseApi, clear);
};
