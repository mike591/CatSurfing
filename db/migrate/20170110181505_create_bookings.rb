class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :cat_id, null: false
      t.string :cat_name, null: false
      t.integer :host_id, null: false
      t.string :host_name, null: false
      t.string :owner_email, null: false
      t.date :start, null: false
      t.date :end

      t.timestamps
    end

    add_index :bookings, :cat_id
    add_index :bookings, :host_id
  end
end
