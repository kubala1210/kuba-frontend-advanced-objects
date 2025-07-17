const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '08',
        month: '07',
        year: '2025'
    },
};

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;

const userBirthDay = user['born']['day'];
const userBirthMonth = user['born']['month'];

if (userBirthDay == day && userBirthMonth == month) {
    console.log('User has birthday today!')
} else {
    console.log('User has not birthday today :(');
}



console.log(day);
console.log(month);