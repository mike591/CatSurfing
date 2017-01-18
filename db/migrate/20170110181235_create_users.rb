class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :status, null: false
      t.integer :age
      t.string :sex
      t.text :profile

      t.timestamps
    end

    add_index :users, :username
    add_index :users, :session_token
    add_index :users, :email
  end
end
