const unitEnd = require('./unitEnd');
const endC = require('../subjects/endC');
exports.getSubject = function(req,subjects){
    if(req.unit==='B'){
        subjects=endC.getSubject(req,subjects);
    }else{
        subjects=unitEnd.getSubject(req,subjects);
    }
    return subjects;
}