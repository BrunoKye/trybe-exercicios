const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const client = order.name;
    const phoneNumber = order.phoneNumber;
    const street = order.address.street;
    const homeNumber = order.address.number;
    const apartment = order.address.apartment;

   console.log(`Olá ${deliveryPerson}, entrega para ${client}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${homeNumber}, AP: ${apartment}`);
  };
    
  const orderModifier = (order) => {
    const client = order.name = 'Luiz Silva'
    const payment = order.payment = 50;
    
    console.log(`Olá ${client}, o total do seu pedido de Marguerita, Pepperoni e Coca-Cola Zero é R$ ${payment},00.`);
  };
  
  customerInfo(order);
  orderModifier(order);
