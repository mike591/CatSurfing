class CreateCats < ActiveRecord::Migration[5.0]
  def change
    create_table :cats do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :cats, :user_id
  end
end
