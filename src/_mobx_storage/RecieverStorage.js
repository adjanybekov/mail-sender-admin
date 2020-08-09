import { observable, autorun, decorate } from "mobx";

class RecieverStorage {
  recievers = ["asad", "asas"];
  filter = "filterizatrion";
}
decorate(RecieverStorage, {
  recievers: observable,
  filter: observable,
});

var store = (window.store = new RecieverStorage());

export default store;

autorun(() => {
  console.log(store.filter);
  console.log(store.recievers);
});
