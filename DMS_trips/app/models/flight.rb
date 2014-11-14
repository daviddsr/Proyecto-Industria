class Flight < ActiveRecord::Base


	def self.search(origin,destination,fechaida)


		#The result of the search has to be all the flights that have the origin and destinations entered by user

		where("origin like ?", "%#{origin}%").where("destination like ?", "%#{destination}%").where("from_date like ?", "%#{fechaida}%")



		#where(origin: origin).where(destination: destination)

		#@@origen.each do |flight|
			#if flight.destination == destination
				#@flights.push flight
				#@flights.each do |flight_found|
					#@result = "#{flight_found.origin},#{flight_found.destination},#{flight_found.price}"   
				#end
			#else @no_flight = "No flights found for your search."
			#end
		#end

		#Flight.where(origin: origin).where(destination: destination)
		
	end

	def self.search_cheaper_flight
	arrprice= []
	flights_prices = Flight.where(origin: 'Madrid').where(countrydestination: 'Francia')
	flights_prices.each do |flight|
		arrprice << flight.price 
	end
	
	 Flight.find_by_price(arrprice.min)

	end


	def searchflights
		





		@flights = Flight.all
		ActiveRecord::Base.include_root_in_json = true
		@flightsall=@flights.to_json
	end
end
