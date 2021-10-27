const Cunit = require('./Cunit');
const bangla = require('../subjects/bangla');

exports.getSubject = function(req,subjects){
    if(req.unit==='B'){
        subjects=bangla.getSubject(req,subjects);
    }else{
        subjects=Cunit.getSubject(req,subjects);
    }
    return subjects;
}