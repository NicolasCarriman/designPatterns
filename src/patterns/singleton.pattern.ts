export class OwnBusiness {
  private static instance: OwnBusiness;
  private constructor() {}

  public static getInstance() {
    if(!OwnBusiness.instance) {
      OwnBusiness.instance = new OwnBusiness();
    }

    return OwnBusiness.instance;
  }
}
