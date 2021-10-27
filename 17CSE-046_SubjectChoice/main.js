const app = require('./ResultSystem/index.js');
var req={
    unit:'A',
    math:6,
    biology:10,
    physics:10,
    chemistry:12
}
var ans=app.getSubList(req);
console.log(ans);
