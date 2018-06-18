import { ListenerModule } from './listener.module';

describe('ListenerModule', () => {
  let listenerModule: ListenerModule;

  beforeEach(() => {
    listenerModule = new ListenerModule();
  });

  it('should create an instance', () => {
    expect(listenerModule).toBeTruthy();
  });
});
