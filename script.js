// ATIVIDADE DE FIXAÇÃO 3

// EXERCISE 01

let g1 = parseFloat(prompt("First grade:"));
let g2 = parseFloat(prompt("Second grade:"));

while (g1 < 0 || g2 < 0) {
  alert(
    "The grades must be greater than or equal to zero. Please, try it again"
  );
  g1 = parseFloat(prompt("First grade:"));
  g2 = parseFloat(prompt("Second grade:"));
}

let arithmetic_mean = (g1 + g2) / 2;

if (arithmetic_mean >= 7 && arithmetic_mean < 10) {
  alert("Congratulations, you are approved!");
}
if (arithmetic_mean < 7) {
  alert(
    "Unfortunately, you are disapproved. Don't be discouraged and give your best next semester!"
  );
}

if (arithmetic_mean == 10) {
  alert("Congratulations for passing with distinction!");
}

// EXERCISE 02

//USAR O .TOFIXED() E VALIDAR DADOS, NÃO DEIXAR DIGITAR VALORES NEGATIVOS

let initial_salary = parseFloat(prompt("Type your salary:"));

while (initial_salary <= 0) {
  alert("Your salary must be greater than zero. Please, try it again!");
  initial_salary = parseFloat(prompt("Type your salary:"));
}

const percentage_salary = (initial_salary) => {
  if (initial_salary <= 280) {
    return 20;
  }
  if (initial_salary < 700) {
    return 15;
  }
  if (initial_salary < 1500) {
    return 10;
  }
  else {
    return 5;
  }
};

let percentage = percentage_salary(initial_salary);
let salary_increment = initial_salary * (percentage / 100);
let new_salary = initial_salary + salary_increment;

alert(
  ` Initial Salary: R$ ${initial_salary}\n Percentage: ${percentage}%\n Salary Increment: R$ ${salary_increment} \n New Salary: R$ ${new_salary}`
);

// EXERCISE 03

let hourly_rate = parseFloat(prompt("What is your hourly rate?"));
while (hourly_rate <= 0) {
  alert(
    "The hourly rate must to be a positive number.\n Please, try it again!"
  );
  hourly_rate = parseFloat(prompt("What is your hourly rate?"));
}

let hours_month = parseInt(prompt("How many hours did you work in the month?"));

while (hours_month < 0) {
  alert(
    "The number of hours worked must be greater than or equal to zero.\n Please, try it again!"
  );
  hours_month = parseInt(prompt("How many hours did you work in the month?"));
}

let gross_salary = hourly_rate * hours_month;
gross_salary = gross_salary.toFixed(2);
let inss_tax = 0.1 * gross_salary;
let fgts_tax = 0.11 * gross_salary;

const ir = (gross_salary) => {
  if (gross_salary <= 900) {
    return 0;
  }

  if (gross_salary <= 1500) {
    return 5;
  }

  if (gross_salary <= 2500) {
    return 10;
  }

  if (gross_salary > 2500) {
    return 20;
  }
};

let ir_percentage = ir(gross_salary);
let ir_tax = (ir_percentage / 100) * gross_salary;
let total_taxes = inss_tax + ir_tax;
let net_salary = gross_salary - total_taxes;

alert(
  `Gross_salary: (${hourly_rate} * ${hours_month}) :R$${gross_salary}\n (-) IR ${ir_percentage}% : R$${ir_tax}\n (-) INSS (10%) : R$${inss_tax}\n FGTS (11%) : R$${fgts_tax}\n Total de descontos : R$${total_taxes}\n Salário Liquido : R$${net_salary}`
);
