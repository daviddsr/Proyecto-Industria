class FlightsController < ApplicationController

	def index
		render 'index'
	end
	
	def show
		#Searching departure flights
		if params[:origin] && params[:destination] && params[:from_date]
		@a = params[:from_date].map{|key,value| value}
		@date=Date.new(@a[0].to_i,@a[1].to_i,@a[2].to_i)

		@flights = Flight.search(params[:origin], params[:destination], @date )

		#Searching flights back
		@b = params[:to_date].map{|key,value| value}
		@to_date=Date.new(@b[0].to_i,@b[1].to_i,@b[2].to_i)

		@flights_back = Flight.search(params[:destination], params[:origin], @to_date)

		#@date = [params[:from_date][:year], params[:from_date][:month], params[:from_date][:day]]
		#else
		#redirect_to action: 'index', controller: 'flights'
		#flash[:error] = "This location doesn't exist!"
		end
		
		render 'show', :layout=>'applicationsummary'



		# @origin = search_params[:origin]
		# @destination = search_params[:destination]
		# @flights = Flight.search(@origin, @destination)
		# puts @flights
  	# 	if params[:origin] && params[:destination]

 		# 	 @flights = Flight.search(params[:origin], params[:destination])


 		
 	end
		

    

    #private
	# def search_params
	# 	params.permit(:origin, :destination)
	# end

	
end

#(:all, :conditions => ['name LIKE ?', "%#{params[:origin]}%"], :conditions => ['name LIKE ?', "%#{params[:destination]}%"] )
