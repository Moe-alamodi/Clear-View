exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>Welcom to the Secret Area</h3>
  `
  
  let body

  if (event.body) {
    body = JSON.parse(event.body)

  } esle {
    body = {}

  }

  if(body.password == "123abc") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })

  } else {
    callback(null, {
      statusCode: 401
      
    })

  }

  
}