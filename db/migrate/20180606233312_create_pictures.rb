class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :img_url, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
  end
end
