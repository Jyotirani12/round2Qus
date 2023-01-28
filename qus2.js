const InputArray = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'];
function sendMail(InputArray){
console.log("msg is sent to ",InputArray)
}
// InputArray.sort();
const domains=new Map(); 
for(const address of InputArray){
    const domain=address.split('@')[1];
    if(!domains.has(domain)){

        domains.set(domain,address);
    }
  
    }

 
for(const address of domains.values()){
    sendMail(address)
}






