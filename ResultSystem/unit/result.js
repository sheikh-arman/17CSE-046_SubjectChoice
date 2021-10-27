const Aunit = require('./Aunit');

exports.getSubject = function(req,subjects){
    subjects=Aunit.getSubject(req,subjects);
    return subjects;
}