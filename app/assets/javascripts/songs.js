//add a Song
function submitSong() {
  //event.preventDefault();
debugger;
  var name = $("#new-song-name").val();
  createSong(name);
  $("#new-song-name").val(null);
}

function getArtistId() {
   var intoString = $("#add-new-song").parent().attr('id');
   return parseInt(intoString);
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
      $("#songlist").append("<li>" + name + "<a href='#' onclick='removeSong(0, <%= song.id %>)' id='delete-one-song'>[Delete song via Ajax]</a></li>");
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

function deleteAllSongs(event) {
  debugger;
  $.each($("#songlist").children(), function(index, listItem) {
      debugger;
      removeSong(0, listItem.id)
      debugger;

  });
}
