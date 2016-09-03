/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getTestData:function (req,res) {
    GOT.count().exec(function afterFind(err, battles) {
      if (err) {
        console.log('error occured');
        console.log(err);
        // uh oh
        // (handle error; e.g. `return res.negotiate()`)
        return;
      }
      res.json(battles);
      // would you look at all those zookeepers?
      // (now let's do the next thing;
      //  e.g. `_.reduce(zookeepers, ...)` and/or `return res.json(zookeepers)`)
    });
    // res.json(GOT.query('select count(*) from battles'));
  }
};

