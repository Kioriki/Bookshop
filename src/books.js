// AIzaSyDFl9Wsmv_yGX5JfWccU4MwDGUIUYEIEaA

// const requestURL ='https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<AIzaSyDFl9Wsmv_yGX5JfWccU4MwDGUIUYEIEaA>&printType=books&startIndex=0&maxResults=6&langRestrict=en'


fetch('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<AIzaSyDFl9Wsmv_yGX5JfWccU4MwDGUIUYEIEaA>&printType=books&startIndex=0&maxResults=6&langRestrict=en', {
    body: JSON.stringify(newPost), // Тело запроса в JSON-формате
    headers: {
      // Добавляем необходимые заголовки
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((data) => {
  console.log(data)

})