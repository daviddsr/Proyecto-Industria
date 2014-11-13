class StaticpagesController < ApplicationController

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

end
