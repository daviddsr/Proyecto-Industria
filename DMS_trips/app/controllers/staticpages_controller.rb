class StaticpagesController < ApplicationController

	def home
		render 'home', :layout=>'applicationhome'
	end

	def paris
		render 'paris'
	end

	def madrid
		render 'madrid'
	end

end
