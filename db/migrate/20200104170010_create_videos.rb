class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.time :duration
      t.string :genre
      t.text :desc
      t.string :trailer

      t.timestamps
    end
  end
end
