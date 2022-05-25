$('#button').click(function (e){
    e.preventDefault();

    const date =$('#data').val();
    const key = 'j2kont9puPwcWAFiYkslWep6a2GZR3Zcg6gRBhBI';

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        type:'GET',
        success: function(result){
            const image =$('#imagem');
            const video =$('#video');
            console.log (result);
            $('media').attr('src', result.url);
            $('#video').attr('src', result.url);
           $('text').text(result.explanation);

           if(result.media_type == "image"){
            imagem.html(`<img class='img' src="${result.url}">`)
        }else{
            imagem.html(`<iframe class='img' src="${result.url}?autoplay=1&mute=1"> </iframe>`)
        }
     
        }
    })

})

