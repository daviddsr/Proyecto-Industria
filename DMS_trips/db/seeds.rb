# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Flight.create origin: 'Madrid', destination: 'Paris', price: 95, from_date: Date.new(2014, 11, 6), time_departure: 1030, to_date: Date.new(2014, 11, 6), time_arrive: 1230, duracion: 2, aerolinea: 'DMS Trips', country: 'España'
Flight.create origin: 'Paris', destination: 'Madrid', price: 95, from_date: Date.new(2014, 11, 8), time_departure: 1030, to_date: Date.new(2014, 11, 8), time_arrive: 1230, duracion: 2, aerolinea: 'DMS Trips', country: 'Francia'
Flight.create origin: 'Madrid', destination: 'Paris', price: 75, from_date: Date.new(2014, 11, 6), time_departure: 1030, to_date: Date.new(2014, 11, 6), time_arrive: 1230, duracion: 2, aerolinea: 'DMS Trips', country: 'España'
Flight.create origin: 'Paris', destination: 'Madrid', price: 135, from_date: Date.new(2014, 11, 8), time_departure: 1030, to_date: Date.new(2014, 11, 8), time_arrive: 1230, duracion: 2, aerolinea: 'DMS Trips', country: 'Francia'