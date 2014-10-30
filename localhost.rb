require 'sinatra'
require 'sinatra/reloader'

get '/' do	
	erb :Index
end

get '/summary' do
	erb :summary
end

get '/paris' do 
	erb :paris
end

get '/madrid' do
	erb :madrid
end