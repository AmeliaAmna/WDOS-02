function local() {
    fetch('Json/Introduction.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('IntroductionData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()