class ArtistsController < ApplicationController

def index
  @artists = Artist.all
end

def show
  @artist = Artist.find(params[:id])
  @song = @artist.songs
  @song = Song.new

  respond_to do |format|
    format.html { render :show }
    format.json { render json: @artist }
  end
end

def destroy
  @artist = Artist.find(params[:id])

  @artist.destroy

  redirect_to artists_path
end

end
