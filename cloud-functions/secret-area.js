exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>Welcome To The Secret Area</h3>
  <p>Here we can tell you that <strong>6</strong> was afriad of <strong>7</strong> because <strong>7</strong>, <strong>8</strong>, <strong>9</strong>!!</p>
  `
  
  let body

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "javascript") {
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