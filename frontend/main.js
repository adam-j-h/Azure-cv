window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/get_cvcounter';

const getVisitCount = () =>  {
    let count = 30; 
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response=>{
        console.log("Website Called Function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}