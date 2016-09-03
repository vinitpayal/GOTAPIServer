/**
 * BattleSearchController
 *
 * @description :: Server-side logic for managing Battlesearches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  searchForTerm : function (req , res) {
    var searchedTerm = req.param('searchTerm');

    Battles.find().where({ or :[
      { name : { 'contains' : searchedTerm } },
      { attacker_king : { 'contains' : searchedTerm } },
      { defender_king : { 'contains' : searchedTerm }},
      { battle_type : { 'contains' : searchedTerm } },
      { location : { 'contains' : searchedTerm } }]}).exec(function(err, searchResult){
        if(err){
          console.log(err);
          return;
        }
        console.log(searchResult);
        res.json(searchResult);
    })

  }
};

