export class CustomEvent
{
  // name of event
  public name: string;

  // description of event
  public description: string;

  // date of event
  public date: string;

  constructor(name: string, desc: string, date: string) {
    this.name = name;
    this.description = desc;
    this.date = date;
  }
}
