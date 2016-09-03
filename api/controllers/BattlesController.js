/**
 * BattlesController
 *@author :: vinitpayal@gmail.com
 * @description :: Server-side logic for managing Battles
 */
module.exports = {
  getCount: function( req , res ) {
    console.log( req.query );

    //for applying filters passed by query parameter

    var conditionObject = generateConditionObject(req);

    Battles.count( conditionObject ).exec( function(err , battleCount ){
    if( err ){
      console.log( 'Error Occured !! Plese Get error summary below' );
      console.log( err );
      res.json( {'status' : 500 , 'message' : "Internal Server Error !!!" , result : null });
      return;
    }
    res.json( {'status' : 200 , 'message' : "success" , result : {'count' : battleCount} } );

  });
  },

  /**
   * battle detail for a battle_number
   * @param req
   * @param res
   */
  getBattleDetails : function (req , res) {
    /**
     * condition object from query params
     */
    var conditionObject = generateConditionObject(req);

    /**
     * condition object from url params
     * i.e. /battles/:battle_number
     */
    var battleNumber = req.param('battle_number');
    if(battleNumber){
      conditionObject.battle_number = battleNumber;
    }

    Battles.find(conditionObject).exec(function(err, battleDetails){
      if(err){
        /**
         * Internal server to be logged or to be mailed to concerned person
         */
        res.json( {'status' : 500 , 'message' : "Internal Server Error !!!" , result : null });
        return;
      }
      /**
       * return battle details in json with status 200
       */
      res.json({ status : 200 , message : "success" , result : battleDetails});
    });
  },

  /**
   * Invalid path handler
   */
  invalidPathHandler(req , res){
    res.json({ status : 404 , message : 'Invalid Path' , result : null});
  }

};

/**
 * this function will generate and return condition object according to
 * query parameters passed with request
 *
 */
function generateConditionObject(req){

  var conditionObject = {};

  if( req.query.year ){
    conditionObject.year = req.query.year;
  }

  if( req.query.attacker_king ) {
    conditionObject.attacker_king = { like : '%' + req.query.attacker_king + '%' };
  }

  if( req.query.defender_king ) {
    conditionObject.defender_king = { like : '%' + req.query.defender_king + '%' };
  }

  if( req.query.attacker_outcome ) {
    conditionObject.attacker_outcome = req.query.attacker_outcome;
  }

  if( req.query.battle_type ){
    conditionObject.battle_type = { like : '%' + req.query.battle_type + '%' };
  }

  if( req.query.attacker_commander ){
    conditionObject.attacker_commander = { like : '%' + req.query.attacker_commander + '%' };
  }

  if( req.query.defender_commander ){
    conditionObject.defender_commander = { like : '%' + req.query.defender_commander + '%' };
  }

  if( req.query.summer ){
    conditionObject.summer = req.query.summer;
  }

  if( req.query.location ){
    conditionObject.location = req.query.location;
  }

  if( req.query.region ){
    conditionObject.region = req.query.region;
  }
  return conditionObject;
}


