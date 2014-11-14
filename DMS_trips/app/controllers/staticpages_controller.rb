class StaticpagesController < ApplicationController
	def json
		@flights=Flight.all
		@flights.to_json
		render json: @flights

	end
	def home

		render 'home', :layout=>'applicationhome'
	end

	def paris
		render 'paris', :layout=>'applicationparis'
	end

	def madrid
		render 'madrid', :layout=>'applicationmadrid'
	end

	def under_construction
		render 'under_construction', :layout=>'applicationunder_construction'
	end

	def print_error
		render 'print_error'
	end

end
