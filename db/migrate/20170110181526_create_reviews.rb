class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :host_id, null: false
      t.integer :rating, null: false
      t.text :review, null: false

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :host_id
  end
end
