function local() {
    fetch('Json/SL-Leopard.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('SL-LeopardData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()