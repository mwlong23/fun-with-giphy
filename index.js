let request = require('request');
let fs = require('fs');



const SECRETS = JSON.parse(fs.readFileSync('.secrets'))





function requestRandomGiphy(){
  const baseUrl  = 'http://api.giphy.com/v1/gifs/random?api_key='
  return new Promise((succeed,fail)=>{
    request(`${baseUrl}+${SECRETS.giphyKey}`, {json: true}, (err,res,body)=>{
      if(err){return fail(err);}
      return succeed(body)
    }
    )}
)}

requestRandomGiphy().then(body=>body.json());