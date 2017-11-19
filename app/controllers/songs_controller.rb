class SongsController < ApplicationController

  def new
    @artist = Artist.find(params[:artist_id])
    @song = @artist.songs.build
  end

  def create
     song_params = params.require(:song).permit(:name)
     @artist = Artist.find(params[:artist_id])
     @song = @artist.songs.new(song_params)

#Error is still undefined..
    respond_to do |format|
     if @song.save
       format.html { redirect_to artist_path(@artist), notice: "New song successfully added." }
       format.json { render :show, status: :created, location: @artist }
     else
       format.html { redirect_to root_path }
       format.json { ender json: @song.errors, status: :unprocessable_entity }
     end
   end
 end

  def destroy
    @artist = Artist.find(params[:artist_id])
    @song = @artist.songs.find(params[:id])

    @song.destroy
    redirect_to root_path
  end

end
