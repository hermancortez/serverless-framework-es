exports.newOrder = async (event) => {
  const orderId = uuidv4();
  console.log(` Order ID: ${orderId}`);

  let orderDetails;
  try {
    orderDetails = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON in request body' }),
    };
  }

  console.log(orderDetails);

  const order = {
    orderId,
    ...orderDetails,
  };  

  return {
    statusCode: 201,
    body: JSON.stringify({ message: 'Order created successfully', order }),
  };  
}


exports.getOrder = async (event) => {
  console.log('event', event);

  const orderId = event.pathParameters.orderId;

  const orderDetails = {
    "pizza": "Margherita",
    customerId: 1, 
    "order_status": "COMPLETED"
  }

  const order = {
    orderId,
    ...orderDetails,
  };

  console.log(` Order : ${order}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: order }),
  };
}

exports.preOrder = async (event) => {
  console.log('event', event);
  return;
}