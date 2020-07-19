const mongoose = require('mongoose');


const E= new mongoose.Schema({
    ID: {
    type: String,
    required: true,
  
  },
  age: {
    type: String,
    required: true,
 
  },
  sex: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province:{
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  latitude:{
    type: String,
    required: true,
  },
  longitude:{
    type: String,
    required: true,
  },
  geo_resolution:{
    type: String,
    required: true,
  },
  date_onset_symptoms: {
    type: String,
    required: true,
  },
  date_admission_hospital: {
    type: String,
    required: true,
  },
  date_confirmation:{
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  lives_in_Wuhan: {
    type: String,
    required: true,
  },
  travel_history_dates: {
    type: String,
    required: true,
  },
  travel_history_location: {
    type: String,
    required: true,
  },
  reported_market_exposure: {
    type: String,
    required: true,
  },
  additional_information: {
    type: String,
    required: true,
  },
  chronic_disease_binary: {
    type: String,
    required: true,
  },
  chronic_disease: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  sequence_available: {
    type: String,
    required: true,
  },
  outcome: {
    type: String,
    required: true,
  },
  date_death_or_discharge: {
    type: String,
    required: true,
  },
  notes_for_discussion: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  admin3:{
    type: String,
    required: true,
  },
  admin2: {
    type: String,
    required: true,
  },
  admin1: {
    type: String,
    required: true,
  },
  country_new: {
    type: String,
    required: true,
  },
  admin_id: {
    type: String,
    required: true,
  },
  data_moderator_initials: {
    type: String,
    required: true,
  },
  field34: {
    type: String,
    required: true,
  },
  field35:{
    type: String,
    required: true,
  },
  field36: {
    type: String,
    required: true,
  },
  field37: {
    type: String,
    required: true,
  },
  field38: {
    type: String,
    required: true,
  },
  field39: {
    type: String,
    required: true,
  },
  field40:{
    type: String,
    required: true,
  },
  field41: {
    type: String,
    required: true,
  },
  field42: {
    type: String,
    required: true,
  },
  field43: {
    type: String,
    required: true,
  },
  field44: {
    type: String,
    required: true,
  },
  field45: {
    type: String,
    required: true,
  },
 

});


const EE = mongoose.model('EE', E);
module.exports = EE;