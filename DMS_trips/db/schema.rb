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

ActiveRecord::Schema.define(version: 20141108113601) do

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

end
