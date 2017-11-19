//add a Song
function submitSong(event) {
  event.preventDefault();
  var name = $("#new-song-name").val();
  createSong(name);
  $("#new-song-name").val(null);
}

function createSong(name) {
  var newSong = { name: name, completed: false };};
  var artistId = $("#add-new-song").parent().attr('id');

  $.ajax({
    type: "POST",
    url: "/artists/" + artistId + ".json",
    data: JSON.stringify({
    song: newSong
    }),
    contentType: "application/json",
    dataType: "json"

  .done(function(data) {
    console.log(data);
  }

  var listItem = $("<li></li>");
  listItem.addClass("song");

  $("#songlist").prepend( listItem );
  })

//Delete a song
function removeSong(event) {
  event.preventDefault();

    $listItem = $(listItem);
    songId = $(songItem).data('id');
    deleteSong(songId);
    $listItem.remove();
  });
}

function deleteSong(songId) {
  $.ajax({
    type: "DELETE",
    url: "/artists/" + artistId + "/songs/" + songId + ".json",
    contentType: "application/json",
    dataType: "json"})
    });
    .done(function(data) {
    console.log(data);
}

//Delete all songs of artist
function removeAllSongsOfArtist() {
    event.preventDefault();
    var songId = //??Dit zijn alle songs bij artistId
    var artistId = $("#add-new-song").parent().attr('id');
    $.ajax({
          type: "DELETE",
          url: "/artists/" + artistId + "/songs/" + songId + ".json",
          contentType: "application/json",
          dataType: "json"
        })
        .done(function(data) {
        console.log(data);
}

//Dit triggert submitSong als form gesubmit wordt
$(document).ready(function() {
$(".form_class").bind('submit', submitSong);
$("#delete-one-song").bind('click', removeSong);
$("#delete-all").bind('click', removeAllSongsOfArtist);
});
