export class Card {
  id = "";
  name = "";
  imageUrl = "";
  specialist = "";
  ReservesDate = "";
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.imageUrl = obj.imageUrl;
    this.specialist = obj.specialist;
    this.ReservesDate = obj.ReservesDate;
  }
}
