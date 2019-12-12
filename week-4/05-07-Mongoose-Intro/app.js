const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/mongoose-intro');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        set: value => {
            return value
                .split(' ')
                .map(part => part[0].toUpperCase() + part.slice(1).toLowerCase())
                .join(' ');
        }
    },
    age: {
        type: Number,
        min: 18,
        max: 120
    },
    hobbies: [String],
    address: Object,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            message: 'Email must be lowercase',
            validator: value => {
                if (value.toLowerCase() === value) return true;
                else return false;
            }
        }
    }
});

const User = mongoose.model('User', userSchema);

User.create({ name: 'j' }).then(userFromDB => {
    console.log(`Created user: ${userFromDB}`);
}).catch(err => {
    console.log(`Error at creating user ${err}`);
});

// const catSchema = mongoose.Schema({
//     name: String,
//     lives: Number
// });

// const Cat = mongoose.model('Cat', catSchema);

// Cat.create({ name: 'kitty' }).then(catFromDB => {
//     // console.log(`A new cat was created: ${catFromDb}`);
// }).catch(err => {
//     console.log(`Error while creating new cat: ${err}`);
// });

// find() holt alle Katzen 
// Cat.find().then(catFromDB => {
//     console.log(`Cat was found: ${catFromDB}`);
// }).catch(err => {
//     console.log(`Error while finding a cat: ${err}`);
// });

// findet die erste Katze auf die das query zutrifft
// Cat.findOne({ name: 'kitty' });


// finden über die id
// Cat.findById('5df206b113364ba39403565b').then(catFromDB => {
//     console.log(`Cat was found: ${catFromDB}`);
// }).catch(err => {
//     console.log(`Error while finding a cat: ${err}`);
// });

// legt mehrere Katzen auf einmal in der Datenbank ab
// Cat.insertMany([{ name: 'bar' }, { name: 'baz' }]);

// löscht das erste auf das das query zutrifft
// Cat.deleteOne({ name: 'kitty' });

// löscht das element mit dieser id
// Cat.deleteById('id439028');

// löscht alle auf die das query zutrifft
// Cat.deleteMany({ name: 'kitty' });

// updated die erstbeste
// Cat.updateOne({ name: 'Bar' }, { name: 'Carlo' }).then(cat => { });

// updated element mit dieser id
// Cat.findByIdAndUpdate('id890890', { name: 'foo' });

