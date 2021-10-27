const Bunit = require('./Bunit');
const math = require('../subjects/math');

exports.getSubject = function(req,subjects){
    if(req.unit==='A'){
        subjects=math.getSubject(req,subjects);
    }else{
        subjects=Bunit.getSubject(req,subjects);
    }
    return subjects;
}