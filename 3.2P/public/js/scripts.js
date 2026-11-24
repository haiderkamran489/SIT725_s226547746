// Builds one Materialize card per recipe and adds it to the page
const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = '<div class="col s12 m6 l3 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' + item.image + '"></div>' +
      '<div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' + item.title +
      '<i class="material-icons right">more_vert</i></span>' +
      '<p><a href="#">' + item.link + '</a></p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' + item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' + item.description + '</p>' +
      '</div></div></div>';
    $("#card-section").append(itemToAppend);
  });
};

// GET request to our REST endpoint, then build the cards
const getRecipes = () => {
  $.get('/api/recipes', (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

// Read the modal form and print it (like the workshop)
const submitForm = () => {
  let formData = {};
  formData.title = $('#recipe_title').val();
  formData.cookTime = $('#cook_time').val();
  formData.ingredients = $('#ingredients').val();
  formData.email = $('#email').val();
  console.log("Recipe Submitted: ", formData);
  M.toast({ html: 'Thanks! Your recipe was submitted.' });
  $('#modal1').modal('close');
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#formSubmit').click(() => {
    submitForm();
  });
  getRecipes();
});
