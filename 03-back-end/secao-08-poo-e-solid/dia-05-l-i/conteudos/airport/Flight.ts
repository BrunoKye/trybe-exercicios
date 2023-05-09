class Flight {
  constructor(public num: number, public payload: (Passenger | ShippedItem)[]) { }

  add(newPayload: Passenger | ShippedItem): void {
    this.payload.push(newPayload); 
  }

  remove(removedPayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removedPayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}