import { ChangePasswordRoutingModule } from './change-password-routing.module';

describe('MyProfileRoutingModule', () => {
  let changePasswordRoutingModule: ChangePasswordRoutingModule;

  beforeEach(() => {
    changePasswordRoutingModule = new ChangePasswordRoutingModule();
  });

  it('should create an instance', () => {
    expect(changePasswordRoutingModule).toBeTruthy();
  });
});
