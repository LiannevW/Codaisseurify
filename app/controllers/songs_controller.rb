class SongsController < ApplicationController

  def show
    @artist = Artist.find(params[:artist_id])
    @song = Song.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @song }
    end
  end

  def new
    @artist = Artist.find(params[:artist_id])
    @song = @artist.songs.build
  end

  def create
     song_params = params.require(:song).permit(:name)
     @artist = Artist.find(params[:artist_id])
     @song = @artist.songs.new(song_params)

    respond_to do |format|
     if @song.save
       format.html { redirect_to artist_path(@artist), notice: "New song successfully added." }
       format.json { render json: @song, status: :created }
     else
       format.html { redirect_to root_path }
       format.json { render json: @song.errors, status: :unprocessable_entity }
     end
   end

  def destroy
    @artist = Artist.find(params[:artist_id])
    @song = @artist.songs.find(params[:id])

    @song.destroy

    respond_to do |format|
      format.html { redirect_to artist_path(@artist), notice: "Song(s) successfully deleted"}
      format.json { render json: @artist }
    end
  end
end
end
