$(document).ready(function() {
  console.log('hello from ajax routing');
  $('#delete-btn').click(function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    console.log(url);
    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function(data){
      window.location = '/teams';
    }).fail(function(err){
      console.log('error', err);
    }); // end ajax delete

  });

  $('#edit-team').on('submit', function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    var data = $(this).serialize();

    $.ajax({
      method: 'PUT',
      url: url,
      data: data
    }).done(function(data){
      window.location = '/teams';
    }).fail(function(err){
      console.log('error:', err);
    });
  });

});
