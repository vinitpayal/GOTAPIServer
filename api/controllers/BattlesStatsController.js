/**
 * BattlesStatsController
 *
 * @description :: Server-side logic for managing Battlesstats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// var  series=require("async-series");
module.exports = {

  getStats : function(req , res){
    console.log('stats called');

    var statsObj = {};
    var mostActiveObj = {};

    var mostActiveAttackerQuery = 'select attacker_king from battles group by attacker_king order by count(attacker_king) desc limit 1';

    // series([
    //   function(done) {
    //     Battles.query(mostActiveAttackerQuery, done, function (err, rows) {
    //       return 1;
    //     })
    //     done();
    //   }
    //   ,
    //   function(done) {
    //     statsObj.b=1;
    //     console.log('second thing')
    //     done()
    //   },
    //   function(done) {
    //     statsObj.c=1;
    //     done();
    //     // never happens, because "second thing"
    //     // passed an error to the done() callback
    //   }
    // ], function(err) {
    //   console.log('performed') // "another thing"
    // })
    //
    // // console.log(mostActiveObj);
    // // var mostActiveDefenderQuery = 'select defender_king from battles group by defender_king order by count(defender_king) desc limit 1';
    // // most_active.b = getQueryResult($mostActiveDefenderQuery);
    // //most_active.defender_king = null;
    // // statsObj.most_active = mostActiveObj;
    // res.json({msg : 'done',status : statsObj});


    }
  };
