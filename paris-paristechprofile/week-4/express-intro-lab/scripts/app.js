console.log("Sanity Check: JS is working!");
const handleError = (xhr, status, errorThrown) => console.log('uh oh');

$(document).ready(() => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });
});

handleSuccess = json => {
  albumList.forEach(albums=>{
    let albumList = JSON.parse(this.responseText);
    $(`#albumList`).innerHTML = albumList;
  });
};


/* 
const handleSucess = json =>{
  const albums = json;
  let outputHtml =`<ul>`;
  albums.forEach (album => {
    outputHtml = `${outputHtml}<li>${album.artist} -- ${album.title}</li>`;
  });
  outputHtml +=`</ul>`;

  $(`#albumTarget`).html(outputHtml);
} */