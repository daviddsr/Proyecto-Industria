# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141111191730) do

  create_table "flights", force: true do |t|
    t.string   "origin"
    t.string   "destination"
    t.date     "from_date"
    t.date     "to_date"
    t.integer  "time_departure"
    t.integer  "time_arrive"
    t.integer  "duracion"
    t.string   "country"
    t.string   "aerolinea"
    t.string   "countrydestination"
    t.integer  "price"
    t.string   "imagennaranja"
    t.string   "imagenverde"
    t.string   "imagenamarilla"
    t.string   "imagenrojo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "results", force: true do |t|
    t.string   "origin_departure"
    t.string   "origin_return"
    t.string   "destination_departure"
    t.string   "destination_return"
    t.date     "from_date_departure"
    t.date     "from_date_return"
    t.date     "to_date_departure"
    t.date     "to_date_return"
    t.integer  "time_departure_departure"
    t.integer  "time_departure_return"
    t.integer  "time_arrive_departure"
    t.integer  "time_arrive_return"
    t.integer  "duration_departure"
    t.integer  "duration_return"
    t.string   "airline"
    t.integer  "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
