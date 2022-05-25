$('#button').click(function (e){
    e.preventDefault();

    const date =$('#data').val();
    const key = 'j2kont9puPwcWAFiYkslWep6a2GZR3Zcg6gRBhBI';

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        type:'GET',
        success: function(result){
            const image =$('media');
            const video =$('#video');
            console.log (result);
            $('#titulo').text(result.title);
            $('media').attr('src', result.url);
            $('#video').attr('src', result.url);
           $('text').text(result.explanation);

           if(result.media_type == "image"){
            media.html(`<img class='media' src="${result.url}"/>`)
        }else{
            media.html(`<iframe class='media' src="${result.url}"> </iframe>`)
        }
     
        }
    })

})

