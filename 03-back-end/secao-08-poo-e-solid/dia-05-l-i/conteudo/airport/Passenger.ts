class Passenger {
  constructor(public nome: string, public cpf: number) { }
}

class ShippedItem {
  constructor(
    public nome: string, 
    public id: number, 
    public customerID: string,
  ) { }
}