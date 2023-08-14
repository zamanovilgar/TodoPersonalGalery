const formPerson = document.querySelector("#personal");
const personalList = document.querySelector("#personalList");
const people = [];
formPerson.addEventListener("submit", function (e) {
  e.preventDefault();
  const img_url = this.img_url.value;
  const name = this.name.value;
  const age = this.age.value;
  const salary = this.salary.value;

  const person = {
    name,
    age,
    salary,
    img_url,
  };
  people.push(person);
  console.log(people);
  const content = people
    .map(
      (personObj, index) => `
    <div class="card" style="width: 16rem">
  <img src="${personObj.img_url}" class="card-img-top" alt="${personObj.name}" />
  <div class="card-body">
  <p class="card-title">
      ${personObj.name}
    </p>
    <p class="card-text">
      ${personObj.age}
    </p>
    
    <p class="card-text">
    ${personObj.salary}
    </p>
  </div>
</div>
`
    )
    .join("");
  personalList.innerHTML = content;
  //   console.log("name", name);
  //   console.log("age", age);
  //   console.log("salary", salary);
});

// console.log(formPerson);
