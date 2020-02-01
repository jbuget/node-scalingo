import nock from 'nock';

test('adds 1 + 2 to equal 3', () => {
  expect(true).toBe(false);
});

describe('Authentication', () => {

  test('exchange API token for a Bearer token', () => {
    // given
    nock('https://auth.scalingo.com/v1/tokens/exchange')
      .post()
      .reply(200, {
        "token": "the-bearer-token"
      })

    // when


    // then
  });
});