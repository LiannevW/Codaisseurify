function submitSong(event) {
  event.preventDefault();
  var name = $("#new-song-name").val();
  createSong(name);
  $("#new-song-name").val(null);
}

function createSong(name) {
  var newSong = { name: name };
  var artistId = $("#add-new-song").parent().attr('id');

  $.ajax({
    type: "POST",
    url: "/artists/" + artistId + ".json",
    data: JSON.stringify({
    song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);

//Dit triggert submitSong als form gesubmit wordt
$(document).ready(function() {
$("form").bind('submit', submitSong);
});
