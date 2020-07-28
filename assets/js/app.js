var table = document.getElementsByClassName('table');
var width = window.screen.width;
// console.log(table , width);
if (width < 600){
    console.log('moblie view');
    table[0].classList.add('table-responsive-md')
}
// changing header hover boder-bottm
var active_li = document.getElementsByClassName('show-li')[0];
active_li.style.borderBottom = '1px solid #27146F';


// faker

let genders= [ 'Female' , 'Male' ];
const createStudent = () => {
    return {
      firstName: faker.name.firstName(),
      lastName : faker.name.lastName(),
      email: faker.internet.email(),
      dob: faker.date.past(13, new Date("Sat Sep 20 2019 21:35:02 GMT+0200 (CEST)")),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
      state : faker.address.state(),
      city : faker.address.city(),
    phoneNumber : faker.phone.phoneNumber(),
    gender : faker.random.arrayElement(genders),
    }
  }
  
  const createStudents = (numOfStudents = 50) => {
    return new Array(numOfStudents).fill().map(createStudent);   
  }

  let fakeStudents = createStudents(50);
  // console.log(fakeStudents[1].dob.getFullYear() + "-" + (fakeStudents[1].dob.getMonth()+1) + "-" + fakeStudents[1].dob.getDate())//students details created

// 

let output = "";
     for (let studentData of fakeStudents){
 output += `
             <tr>
              <td data-column="Photo"><img src="${studentData.image}" alt="${studentData.firstName}"></td>
              <td data-column="FirstName">${studentData.firstName}</td>
              <td data-column="LastName">${studentData.lastName}</td>
              <td data-column="D.O.b">${studentData.dob.getDate()}-${studentData.dob.getMonth()+1}-${studentData.dob.getFullYear()}</td>
              <td data-column="Email">${studentData.email}</td>
              <td data-column="Gender">${studentData.gender}</td>
              <td data-column="city">${studentData.city}</td>
              <td data-column="Details"  title="click to check details about the student" class="details"><a href='#studentDetails' onclick='showStdDetail()'>details</a></td>
            </tr>
            `;           
document.getElementById('tableBody').innerHTML = output;
     }

    //  
     let output_1 = "";
     for (let studentData of fakeStudents){
 output_1 += `
 <div class=""> 
 <div id="closeDetails" title="click to close the student detail" onclick="closeStdDetail()"><span><i class="far fa-window-close"></i></span></div>
  <div class="jumbotron">
    <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
            <img src="${studentData.image}" alt="photo" class="img">
            <hr>
            <p> Bio : ${studentData.bio}</p>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
            <div class="container" style="border-bottom:1px solid black">
              <h2>${studentData.firstName} ${studentData.lastName}</h2>
            </div>
              <hr>
            <div class="row">
              <div class="col">
                <ul class="container ">
                  <li><p>First Name : ${studentData.firstName}</p></li>
                  <li><p>last name : ${studentData.lastName}</p></li>
                  <li><p>email : ${studentData.email}</p></li>
                  <li><p>birth date : ${studentData.dob.getDate()}-${studentData.dob.getMonth()+1}-${studentData.dob.getFullYear()} </p></a>
                </ul>
              </div>
              <div class="col">
                <ul class="container ">
                  <li><p>Gender : ${studentData.gender}</p></li>
                  <li><p>city : ${studentData.city}</p></li>
                  <li><p>state : ${studentData.state}</p></li>
                  <li><p>phone : ${studentData.phoneNumber}</p></li>
                </ul>
              </div>
            </div>
    
        </div>
    </div>
  </div>
</div>
            `;           
document.getElementById('studentDetails').innerHTML = output_1;
     }

// show and close of student details
let stdDetails = {
  details : document.getElementsByClassName('details')[0],
  studentDetails : document.getElementById('studentDetails'),
  closeDetails : document.getElementById('closeDetails')
}
// destructing
let {details , studentDetails , closeDetails} = stdDetails;
// console.log(studentDetails)


function showStdDetail() {
  studentDetails.classList.add('show-std-details')
  document.getElementById('studentBlock').style.padding = '0px'
}
function closeStdDetail() {
  studentDetails.classList.remove('show-std-details')
  document.getElementById('studentBlock').style.padding = '100px 0px 0px 0px'
}



// ==============
function facultyDetails() {
let GitUrl = "https://api.github.com/users";
document.getElementById('facultyList').innerHTML = `<h1>Loading...</h1>`
window.fetch(GitUrl).then(users =>{
    // console.log(users)
    // JSON Object
users.json().then(user => {
    console.log(user);
    let output_2 = "";
    for (let facultyData of user){
output_2 += `
<div class="faculty-mob card mx-2 my-4" style="width: 23%; float: left;">
  <div class="card ">
    <img class="card-img-top" src="${facultyData.avatar_url}" alt="${facultyData.login}">
    <div class="card-body">
      <h5 class="card-title text-uppercase text-bold py-2" style="border-bottom: 1px solid black;">${facultyData.login}</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea tempore iusto!</p>
    <a href="#" class="btn btn-primary w-100">Contact Faculty</a>
    </div>
  </div>
  </div>
`;
document.getElementById('facultyList').innerHTML = output_2;
    }
}).catch(err => console.log(err))
}).catch(err => console.log(err));
};


// // 
function registerStudent(){
 let registerObj = {
  form : document.getElementById('register-form'),
  alert : document.getElementById('alertBlock'),
  first_name : document.getElementById('first_name'),
  last_name : document.getElementById('last_name'),
  birthdate: document.getElementById('birthdate'),
  email : document.getElementById('email'),
  mobile : document.getElementById('mobile'),
  city : document.getElementById('city'),
  password : document.getElementById('password'),
}

let {form , alert , first_name, last_name , birthdate , email , mobile , city , password} = registerObj ;
// console.log(form , alert , firstName , last_name , birthdate , email , mobile , city , password);
form.addEventListener('submit' , (e) => {
  let messages = [];
  if(first_name.value === '' || first_name.value === null){
      messages.push(`<p class="alert alert-danger">First Name is required</p>`);
  }
  if(last_name.value === '' || last_name.value === null){
      messages.push(`<p class="alert alert-danger">Last Name is required</p>`);
  }
  if(birthdate.value === '' || birthdate.value === null){
    messages.push(`<p class="alert alert-danger">Birth Date is required</p>`);
}
if(email.value === '' || email.value === null){
  messages.push(`<p class="alert alert-danger">Email Id is required</p>`);
}
if(mobile.value === '' || mobile.value === null){
  messages.push(`<p class="alert alert-danger">Phone Number is required</p>`);
}if(city.value === '' || city.value === null){
  messages.push(`<p class="alert alert-danger">Location is required</p>`);
}
if(password.value === '' || password.value === null){
  messages.push(`<p class="alert alert-danger">password is required</p>`);
}
  if(password.value.length < 5){
      messages.push(`<p class="alert alert-danger">password length must be more than 5 char</p>`)
  }
  if(messages.length > 0){
      e.preventDefault();
      alert.style.display = "block"
      alert.innerHTML = messages.join('')
  }
});
}