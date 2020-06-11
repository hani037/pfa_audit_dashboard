export class User {
  constructor(
    public id: string,
    private tokenn: string
  ) {}

  get token() {
    return this.tokenn;
  }

}
