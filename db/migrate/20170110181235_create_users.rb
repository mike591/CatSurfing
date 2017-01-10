class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token
      t.string :email
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :status
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
