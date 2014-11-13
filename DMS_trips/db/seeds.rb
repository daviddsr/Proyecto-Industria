# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Flight.create origin: 'Madrid', destination: 'Paris', price: 95, from_date: Date.new(2014, 11, 15), time_departure: 1030, to_date: Date.new(2014, 11, 15), time_arrive: 1230, duracion: 2, aerolinea: 'DMS Trips', country: 'España', countrydestination:'Francia', imagennaranja:'francia', imagenverde:'franciagreen', imagenamarilla:'franciayellow', imagenrojo:'franciared'

Flight.create origin:'Paris', destination: 'Madrid', price: 95, from_date: Date.new(2014, 11, 18), time_departure: 1030, to_date: Date.new(2014, 11, 18), time_arrive: 1230,duracion: 2, aerolinea: 'DMS Trips', country: 'Francia',countrydestination:'España',imagennaranja:'spain',imagenverde:'spaingreen',imagenamarilla:'spainyellow',imagenrojo:'spainred'

Flight.create origin:'Madrid', destination: 'Paris',price: 75, from_date: Date.new(2014, 11, 15), time_departure: 1030,to_date: Date.new(2014, 11, 15), time_arrive: 1230,duracion: 2,aerolinea: 'DMS Trips', country: 'España',countrydestination:'Francia', imagennaranja:'francia', imagenverde:'franciagreen', imagenamarilla:'franciayellow', imagenrojo:'franciared'

Flight.create origin:'Paris', destination: 'Madrid',price: 135, from_date: Date.new(2014, 11, 18), time_departure: 1030,to_date: Date.new(2014, 11, 18), time_arrive: 1230,duracion: 2,aerolinea: 'DMS Trips', country: 'Francia',countrydestination:'España', imagennaranja:'spain',imagenverde:'spaingreen',imagenamarilla:'spainyellow',imagenrojo:'spainred'

Flight.create origin:'Madrid', destination: 'Lisboa',price: 55, from_date: Date.new(2014, 11, 16), time_departure: 1030,to_date: Date.new(2014, 11, 16), time_arrive: 1230, duracion: 2,aerolinea: 'DMS Trips', country: 'España',countrydestination:'Portugal',imagennaranja:'portugal',imagenverde:'portugalgreen',imagenamarilla:'portugalyellow',imagenrojo:'portugalred'

Flight.create origin:'Madrid', destination: 'Londres',price: 85, from_date: Date.new(2014, 11, 16), time_departure: 1030,to_date: Date.new(2014, 11, 16), time_arrive: 1230,duracion: 2,aerolinea: 'DMS Trips', country: 'España',countrydestination:'United Kingdom',imagennaranja:'unitedkingdom',imagenverde:'unitedkingdomgreen',imagenamarilla:'unitedkingdomyellow',imagenrojo:'unitedkingdomred'

Flight.create origin:'Londres', destination: 'Madrid',price: 125, from_date: Date.new(2014, 11, 19), time_departure: 1030,to_date: Date.new(2014, 11, 19), time_arrive: 1230,duracion: 2,aerolinea: 'DMS Trips', country: 'Reino Unido',countrydestination:'España',imagennaranja:'spain',imagenverde:'spaingreen',imagenamarilla:'spainyellow',imagenrojo:'spainred'

Flight.create origin:'Madrid', destination: 'Berlin',price: 225, from_date: Date.new(2014, 11, 15), time_departure: 1030,to_date: Date.new(2014, 11, 15), time_arrive: 1330,duracion: 3,aerolinea: 'DMS Trips', country: 'España',countrydestination:'Alemania',imagennaranja:'alemania',imagenverde:'alemaniagreen',imagenamarilla:'alemaniayellow',imagenrojo:'alemaniared'

Flight.create origin:'Madrid', destination: 'Barcelona',price: 55, from_date: Date.new(2014, 11, 16), time_departure: 1030,to_date: Date.new(2014, 11, 16), time_arrive: 1130,duracion: 1,aerolinea: 'DMS Trips', country: 'España',countrydestination:'España',imagennaranja:'spain',imagenverde:'spaingreen',imagenamarilla:'spainyellow',imagenrojo:'spainred'

Flight.create origin:'Madrid', destination: 'Roma',price: 85, from_date: Date.new(2014, 11, 22), time_departure: 1430,to_date: Date.new(2014, 11, 22), time_arrive: 1600,duracion: 2,aerolinea: 'DMS Trips', country: 'España',countrydestination:'Italia',imagennaranja:'italia',imagenverde:'italiagreen',imagenamarilla:'italiayellow',imagenrojo:'italiared'

Flight.create origin:'Madrid', destination: 'Amsterdam',price: 255, from_date: Date.new(2014, 11, 20), time_departure: 1430,to_date: Date.new(2014, 11, 20), time_arrive: 1730,duracion: 3,aerolinea: 'DMS Trips', country: 'España',countrydestination:'Holanda',imagennaranja:'holanda',imagenverde:'holandagreen',imagenamarilla:'holandayellow',imagenrojo:'holandared'

Flight.create origin:'Madrid', destination: 'Estambul',price: 450, from_date: Date.new(2014, 11, 24), time_departure: 1030,to_date: Date.new(2014, 11, 24), time_arrive: 1430,duracion: 4,aerolinea: 'DMS Trips', country: 'España',countrydestination:'Turquía',imagennaranja:'turquia',imagenverde:'turquiagreen',imagenamarilla:'turquiayellow',imagenrojo:'turquiared'

Flight.create origin: 'Madrid', destination: 'Nueva Delhi', price: 885, from_date: Date.new(2014, 11, 25), time_departure: 1030, to_date: Date.new(2014, 11, 25), time_arrive: 1830, duracion: 8, aerolinea: 'DMS Trips', country: 'España', countrydestination: 'India', imagennaranja: 'india', imagenverde: 'indiagreen', imagenamarilla: 'indiayellow', imagenrojo: 'indiared'

Flight.create origin: 'Madrid', destination: 'Pekin', price: 1125, from_date: Date.new(2014, 11, 24), time_departure: 1100, to_date: Date.new(2014, 11, 24), time_arrive: 1030, duracion: 18, aerolinea: 'DMS Trips', country: 'España', countrydestination: 'China', imagennaranja: 'china', imagenverde: 'chinagreen', imagenamarilla: 'chinayellow', imagenrojo: 'chinared'

Flight.create origin: 'Madrid', destination: 'Melbourne', price: 1250, from_date: Date.new(2014, 11, 28), time_departure: 1000, to_date: Date.new(2014, 11, 28), time_arrive: 2400, duracion: 14, aerolinea: 'DMS Trips', country: 'España', countrydestination: 'Australia', imagennaranja: 'australia', imagenverde: 'australiagreen', imagenamarilla: 'australiayellow', imagenrojo: 'australiared'