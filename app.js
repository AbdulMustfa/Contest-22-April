// sample data
let users = [
    {id:1, name:"john", age:"18", profession:"developer"},
    {id:2, name:"jack", age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19", profession:"admin"}
  ];
  
  // function to filter users based on profession
  function filterUsers(profession) {
    return users.filter(user => user.profession === profession);
  }
  
  // function to render user cards
  function renderCards(users) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<span style="padding:10px">Name:&nbsp; ${user.name}</span>
                        <span style="padding:10px">Age:&nbsp; ${user.age}</span>
                        <span style="padding:10px">Profession:&nbsp; ${user.profession}</span>`;
      cardsContainer.appendChild(card);
    });
  }
  
  // event listener for filter button click
  document.getElementById('filter-btn').addEventListener('click', () => {
    const profession = document.getElementById('profession').value;
    if (profession === '') {
      alert('Please select a profession before clicking the button');
      return;
    }
    const filteredUsers = filterUsers(profession);
    renderCards(filteredUsers);
  });
  
  // event listener for add user button click
  document.getElementById('add-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession-input').value;
    const newUser = {
      id: users.length + 1,
      name,
      age,
      profession
    };
    users.push(newUser);
    renderCards(users);
  });
  