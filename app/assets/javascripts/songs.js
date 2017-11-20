//add a Song
function submitSong(event) {

  //sevent.preventDefault();
debugger;
  var name = $("#new-song-name").val();
  createSong(name);
  $("#new-song-name").val(null);
}

function getArtistId() {
  return $("#add-new-song").parent().attr('id');
}


function createSong(name) {
  var newSong = { name: name };
  var artistId = getArtistId();

  $.ajax({
    type: "POST",
    url: "/artists/" + artistId + "/songs.json",
    data: JSON.stringify({
      song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  })
  .done(function() {
      $("#songlist").append("<li>" + name + "<a href='#' id='delete-one-song'>[Delete song via Ajax]</a></li>");
    });
}

//Delete a song
function removeSong(event, songId) {
  debugger;
  $("#songlist").find("#" + songId).remove();
  var artistId = getArtistId();
  deleteSong(artistId, songId);
}

function deleteSong(artistId, songId) {
  $.ajax({
    type: "DELETE",
    url: "/artists/" + artistId + "/songs/" + songId + ".json",
    contentType: "application/json",
    dataType: "json"
  })
    .done(function(data) {
    console.log(data);
  });
}

function deleteAllSongs() {

  $.each($("#songlist").children(), function(index, listItem) {
      removeSong(0, listItem.id)
      debugger;

  });
}

/* Don't think I need this anymore..
$(document).ready(function() {
  console.log("test:is this working?");
  //$("#delete-all").bind('click', removeAllSongsOfArtist);
});
