const inquirer = require('inquirer')

var str = "abcdefabAB";
console.log(str.match(/ab/g));
console.log(str.match(/ab/gi));

var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is your name\n',
        default: function () {
            return 'Doe';
        }
    },
    {
        type: 'input',
        name: 'age',
        message: 'how old are you?\n'
    },
    {
        type: 'input',
        name: 'phone number',
        message: 'please input your phone number\n',
        validate: function (value) {
            var pass = value.match(
              /^1[3|4|5|6|7|8|9][0-9]{9}$/
            );
            if (pass)
              return true;
            else
                return 'Please enter a valid phone number';
        }
    },
    {
        type: 'password',
        name: 'password',
        message: 'your password\n'
    }
];

inquirer.prompt(questions)
.then(answers => {
    console.log(`Hi, ${answers['name']}, you age is ${answers['age']}, your phone number is ${answers['phone number']}`);
});
