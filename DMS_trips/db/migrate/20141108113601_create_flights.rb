class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |f|
    	f.string :origin
    	f.string :destination
    	f.date :from_date
    	f.date :to_date
    	f.integer :time_departure
    	f.integer :time_arrive
    	f.integer :duracion
    	f.string :country
    	f.string :aerolinea
    	f.string :country
    	f.string :countrydestination
    	f.integer :price	

      	f.timestamps
    end
  end
end
