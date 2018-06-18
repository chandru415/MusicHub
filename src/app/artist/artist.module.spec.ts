import { ArtistModule } from './artist.module';

describe('ArtistModule', () => {
  let artistModule: ArtistModule;

  beforeEach(() => {
    artistModule = new ArtistModule();
  });

  it('should create an instance', () => {
    expect(artistModule).toBeTruthy();
  });
});
