require 'test_helper'

class Api::VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_videos_index_url
    assert_response :success
  end

  test "should get show" do
    get api_videos_show_url
    assert_response :success
  end

end
