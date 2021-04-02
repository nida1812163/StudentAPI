const Student=require('../models/student.model');

exports.test=(req, res)=>{
    res.send('Greetings from test controller');
}

exports.student_create=(req, res)=>{
    let student = new Student({
        name: req.body.name,
        gender: req.body.gender,
        city: req.body.city
    });

    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.send('Student record created successfully');
    });
}

exports.student_details=(req, res)=>{
    Student.findById(req.params.id, (err, student)=>{
        if(err){
            return next(err);
        }
        res.send(student);
    })
}

exports.student_update=(req, res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, students)=>{
        if(err){
            return next(err);
        }
        res.send('Student record updated')
    })
}

exports.student_delete=(req, res)=>{
    Student.findByIdAndDelete(req.body.id, (err)=>{
        if (err){
            return next(err);
        }
        res.send('Student record deleted')
    })
}


