document.getElementById('getApi').addEventListener('click', getApi);
document.getElementById('getApi').addEventListener('onkeydown', getApi);

function getApi() {

  name = encodeURI(document.getElementById('ipAddress').value);
  console.log("input name :", name);

  fetch(`https://api.genderize.io?name=${name}`, {
    method: 'GET',
  })
    .then(function (data) {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      let output = `
            <div>
                <div style="color:black; width:10rem; background-color:white; border-radius: 10px;" class="p-3">        
                    <p class="m-0" style="font-width:bold; font-size:2rem;">Gender</p>
                    <p class="m-0" style="font-width:bold; font-size:2rem;">${data.gender.toUpperCase()}</sup></p>
                </div>
            </div>
            `;
      console.log('printing data', data);
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
}
