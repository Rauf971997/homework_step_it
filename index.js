//Задание 1 сложность 3
/*alert("Вы должны зарегистрироваться");
let registration = false;

while (!registration) {
  let userLogin = prompt("Введите логин:");
  let userPassword = prompt("Введите пароль:");

  alert("Теперь вы должны авторизоваться.");

  let authLogin = prompt("Введите логин для авторизации:");
  let authPassword = prompt("Введите пароль для авторизации:");

  if (userLogin === authLogin && userPassword === authPassword) {
    alert("Всё в порядке. Вы авторизованы!");
    registrtion = true; 
  } else {

    alert("Неправильный логин или пароль. Попробуйте еще раз.");
  }
}*/


//(сложность 4)
/*let registrationAttempts = 0;
let createUser = true;

while (createUser) {
  alert("Вы должны зарегистрироваться.");
  let login = prompt("Введите логин:");
  let password = prompt("Введите пароль:");
  alert("Теперь вы должны авторизоваться.");
  let authLogin = prompt("Введите логин для авторизации:");
  let authPassword = prompt("Введите пароль для авторизации:");

  if (login === authLogin && password === authPassword) {
    alert("Всё в порядке. Вы авторизованы!");
    break; 
  } else {

    alert("Неправильный логин или пароль. Попробуйте еще раз.");
    registrationAttempts++; 
  }

  if (registrationAttempts === 3) {

    createUser = confirm("Вы исчерпали все попытки. Хотите создать нового пользователя?");

    if (createUser) {
    
      registrationAttempts = 0;
    } else {
     
      registrationAttempts = 0;
    }
  }
}*/



//(сложность 5)
let registrationAttempts = 0;
let createUser = true;

while (createUser) {
  alert("Вы должны зарегистрироваться.");
  let login = prompt("Введите логин:");
  let password = prompt("Введите пароль:");
  alert("Теперь вы должны авторизоваться.");
  let authLogin = prompt("Введите логин для авторизации:");
  let authPassword = prompt("Введите пароль для авторизации:");

  if (login === authLogin && password === authPassword) {
    alert("Всё в порядке. Вы авторизованы!");
    break; 
  } else {

    alert("Неправильный логин или пароль. Попробуйте еще раз.");
    registrationAttempts++; 
  }

  if (registrationAttempts === 3) {
   
    let choice = prompt("Вы исчерпали все попытки. Выберите действие: (1 - создать нового пользователя, 2 - сбросить пароль)");

    if (choice === "1") {
      createUser = true;
      registrationAttempts = 0;
    } else if (choice === "2") {
     
      let resetLogin = prompt("Введите логин для сброса пароля:");

      if (resetLogin === login) {
        alert("Пароль успешно сброшен.");
        break; 
      } else {
        alert("Такого логина не существует. Попробуйте создать пользователя.");
        let createNewUser = confirm("Хотите создать нового пользователя?");
        if (!createNewUser) {
          registrationAttempts = 0;
        } else {
          createUser = true;
          registrationAttempts = 0;
        }
      }
    }
  }
}





