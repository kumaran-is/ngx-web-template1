import { MyProfileRoutingModule } from './my-profile-routing.module';

describe('MyProfileRoutingModule', () => {
  let myProfileRoutingModule: MyProfileRoutingModule;

  beforeEach(() => {
    myProfileRoutingModule = new MyProfileRoutingModule();
  });

  it('should create an instance', () => {
    expect(myProfileRoutingModule).toBeTruthy();
  });
});
