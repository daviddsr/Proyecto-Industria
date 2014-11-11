class StaticpagesController < ApplicationController

	def home
		render 'home'
	end

	def paris
		render 'paris', :layout=>'applicationparis'
	end

	def madrid
		render 'madrid'
	end

end
