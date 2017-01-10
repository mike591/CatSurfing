class CreateCats < ActiveRecord::Migration[5.0]
  def change
    create_table :cats do |t|
      t.integer :user_id
      t.string :name
      t.text :description

      t.timestamps
    end

    add_index :cats, :user_id
  end
end
