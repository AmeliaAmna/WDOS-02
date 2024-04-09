function local() {
    fetch('Json/Department-of-WL.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('Department-of-WLData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()