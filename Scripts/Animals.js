function local() {
    fetch('Json/Animals.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('AnimalsData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()