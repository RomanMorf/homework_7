import { getTrandingFeed } from "@/services/getTrandingFeed.ts";
jest.mock('@/services/getTrandingFeed.ts')

describe('getTrandingFeed function', () => {
  it('getTrandingFeed test', async () => {
    const result = await getTrandingFeed()
    expect(getTrandingFeed).toBeCalled()
  });
});
