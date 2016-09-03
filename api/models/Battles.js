/**
 * Battles.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'battles',
  autoPK: false,

  attributes: {
    name: {type: 'string'},
    year: {type: 'string'},
    battle_number: {type: 'integer'},
    attacker_king: {type: 'string'},
    attacker_1: {type: 'string'},
    attacker_2: {type: 'string'},
    attacker_3: {type: 'string'},
    attacker_4: {type: 'string'},
    defender_1: {type: 'string'},
    defender_2: {type: 'string'},
    defender_3: {type: 'string'},
    defender_4: {type: 'string'},
    attacker_outcome: {type: 'string'},
    battle_type: {type: 'string'},
    major_death: {type: 'integer'},
    major_capture: {type: 'integer'},
    attacker_size: {type: 'integer'},
    defender_size: {type: 'integer'},
    attacker_commander: {type: 'string'},
    defender_commander: {type: 'string'},
    summer: {type: 'integer'},
    location: {type: 'string'},
    region: {type: 'string'},
    note: {type: 'string'}

  }
}



