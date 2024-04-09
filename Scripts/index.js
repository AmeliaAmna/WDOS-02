function local() {
    fetch('Json/index.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('IndexData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()