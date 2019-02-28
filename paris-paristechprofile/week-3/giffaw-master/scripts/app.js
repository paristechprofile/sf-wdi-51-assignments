console.log('1');


//header
//search bar
//results

const success = (e) => {
    console.log(e)
    response.data.forEach( gif => {
        $('.gif-gallery').append(`
            <div>
                <h4>${gif.title}</h4>
                <img src="${gif.images.fixed_height_small.url}" />
            </div>
        `)
    })
};
console.log('2');
const error = (error) => {
    console.log(error)
};
console.log('3');



let search = (e) => {
    console.log(e)
    // e.preventDefault();

    const base = 'http://api.giphy.com/v1/gifs/trending'/* 'http://api.giphy.com/v1/gifs/search?q=' */;
    const apiKey = '&api_key=QIgErT45Ai5SJuAOiCujMR2Jjser4vXZ';
    /* let query = $(".gif-input").val(); */
    console.log('4');

    $.ajax({
        method: "GET",
        url: 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=QIgErT45Ai5SJuAOiCujMR2Jjser4vXZ&limit=5',
        success: success,
        error: error
    })
    console.log('5');
    console.log('6');
    
};
console.log('7');
$("#giphySearch").on("submit", search()); 
console.log('1');
/* 

//header
//search bar
//results

const success = (response) => {
    console.log(response)
    response.data.forEach(gif => {
        $('.gif-gallery').append(`
            <div>
                <h4>${gif.title}</h4>
                <img src="${gif.images.fixed_height_small.url}" />
            </div>
        `)
    })
};
console.log('2');
const error = (error) => {
    console.log(error)
};
console.log('3');



$('form').on(`click`, '.btn', function(e){
    e.preventDefault();

    const base = 'http://api.giphy.com/v1/gifs/search?q=';
    const apiKey = '&api_key=QIgErT45Ai5SJuAOiCujMR2Jjser4vXZ';
    let query = $(".gif-input").attr('value');
    console.log('4');

    $.ajax({
        method: "GET",
        url: base+apiKey+query,
        success: function(response){
            response.data.forEach(gif => {
                $('.gif-gallery').append(`
                    <div>
                        <h4>${gif.title}</h4>
                        <img src="${gif.images.fixed_height_small.url}" />
                    </div>
                `)
            })
        },
        error: function (error) {
        console.log('5')
        }
    });
});
 */