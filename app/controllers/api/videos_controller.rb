class Api::VideosController < ApplicationController

  def index
    render json: Video.all
  end

  def show
    render json: @video
  end

  def create
    video = Video.new(video_params)

    if video.save
      render json: video
    else
      render json: video.errors, status: 422
  end

  def update
    @video.update(video_params)
    render json: @video
  else
    render json: @video.errors, status: 422
  end

  def destroy
    @video.destroy
  end

  private

  def set_video
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit{:title, :duration, :genre, :desc, :trailer)
  end

end
