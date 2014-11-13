class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |r|
      r.string :origin_departure
      r.string :origin_return
      r.string :destination_departure
      r.string :destination_return
      r.date :from_date_departure
      r.date :from_date_return
      r.date :to_date_departure
      r.date :to_date_return
      r.integer :time_departure_departure
      r.integer :time_departure_return
      r.integer :time_arrive_departure
      r.integer :time_arrive_return
      r.integer :duration_departure
      r.integer :duration_return
      r.string :airline
      r.integer :price
      r.timestamps
    end
  end
end

   
