class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :cat_id
      t.integer :host_id
      t.date :start
      t.date :end

      t.timestamps
    end

    add_index :bookings, :cat_id
    add_index :bookings, :host_id
  end
end
