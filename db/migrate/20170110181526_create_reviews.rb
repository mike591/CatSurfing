class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :host_id
      t.integer :rating
      t.text :review

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :host_id
  end
end
