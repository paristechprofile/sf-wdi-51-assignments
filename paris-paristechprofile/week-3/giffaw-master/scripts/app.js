console.log('1');

//header
//search bar
//results

const success = (res) => {
    console.log('2');
    console.log(res)
    res.data.forEach( gif => {
        $('.gif-gallery').append(`
            <div>
                <h4>${gif.title}</h4>
                <img src="${gif.images.fixed_height_small.url}" />
            </div>
        `)
    })
};

const error = (error) => {
    console.log(error)
};
console.log('3');

const search = (e) => {
    // console.log(e)
    e.preventDefault(); 
    const base = 'http://api.giphy.com/v1/gifs/search?q=';
    let query = $(".gif-input").val();
    const apiKey = '&api_key=QIgErT45Ai5SJuAOiCujMR2Jjser4vXZ';
    console.log('4');

    $.ajax({
        method: "GET",
        url: base+query+apiKey,
        success: success,
        error: error
    })
    console.log('5');
    console.log('6');
    
};
// console.log(success);
$(".form-inline").submit(search);



console.log('8');
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