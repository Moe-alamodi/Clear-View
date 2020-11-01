exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>Welcom to the Secrent Area</h3>
  <p>Why was <strong>6</strong> afraid of <strong>7</strong>? </p>
  <p>Because <strong>7</strong>, <strong>8</strong>, <strong>9</strong>!</p>
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