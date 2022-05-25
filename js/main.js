let bnt = document.querySelector('#submit')

bnt.addEventListener('click',() => {
    apiApod()
})

function apiApod () {
const data =$ ('#data').val();

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=j2kont9puPwcWAFiYkslWep6a2GZR3Zcg6gRBhBI&date=${data}`,
    success: function(data){
        apiData(data);
}
})
}

function apiData (result){
    const imagem =$ ('.imagem');
    const titulo =$ ('.titulo');
    const explanation =$ ('.explanation');
    const copyright =$ ('.copyright');
    
    

    titulo.html(`${result.title}`);
    explanation.html(`${result.explanation}`);
    copyright.html(`${result.copyright}`)

    if(result.media_type == 'image') {
        imagem.html(`<img class='img' src="${result.url}"/>`)
      } else {
        imagem.html(`<iframe class="img" src="${result.url}?autoplay=1&mute=1"></iframe>`)
        }
}
