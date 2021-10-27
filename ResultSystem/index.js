const result = require('./unit/result');
exports.getSubList = function(req,res,next){
    var subjects= [];
    subjects=result.getSubject(req,subjects);
    return subjects;
}