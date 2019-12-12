function getDataFromBackend(dataId) {
    console.log("BACKEND client wants:" + dataId);
    let backendPromise = new Promise(
        (resolve, reject) => {
            window.setTimeout(
                () => {
                    let backendError = Math.random();
                    if (backendError > 0.20) {
                        console.log("BACKEND database deliveres data for:" + dataId);
                        resolve("This is data from the backend: data about " + dataId);
                    }
                    else{
                        console.log("BACKEND database FAILURE:"+ dataId);                     
                        reject("database not available:" + backendError);
                    }
                },
                Math.random() * 5000
            );
        }
    );
    return backendPromise;
}
/*
console.log("Client asks for \"User\"");
getDataFromBackend("User")
    .then(
        (result) => {
            //you can do complicated things with the backend data now
            console.log("\nCLIENT got this Data:" + result);
        }
    )
    .catch(
        (error) => {
            //no data from the backend, you have to handle this somehow
            console.log(`\nERROR ${error} ERROR`);
        }
    );
    */

   console.log("Client asks for \"Album\", \"Song\", \"User\"");

   Promise.all([getDataFromBackend("Album"), getDataFromBackend("Song"), getDataFromBackend("User")])
   .then(
       values => {
           values.forEach(
               (ergebnis) => console.log("Promise.all values:" + ergebnis)
           )
       }
   ).catch(
       err => console.log("Error:" + err)
   )