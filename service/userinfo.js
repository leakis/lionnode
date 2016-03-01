/**
 * Created by lea on 2016-02-01.
 */
var mongo=require('../common/mongodbhelper');
function hello()
{
    mongo=new mongo();
    //mongo.insertOne()
    this.version='1.1.1';
    this.name='zheng';
    this.age=28;
    this.city="shanghai";
    this.sayHello=function()
    {
        var doc={
            _id:4,
            id:4,
            name:'lion',
            age:28,
            province:'shanghai',
            city:'shanghai'
        }
        //mongo.insertOne('mycol',doc, function (err,result) {
        //    //console.log(err);
        //    console.log(result);
        //})

        mongo.find('mycol',{},function(err,docs){
        console.log(docs);
    })
    }
}

module.exports=hello;
