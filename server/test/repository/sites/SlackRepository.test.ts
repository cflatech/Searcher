import SlackRepository from '$/repository/sites/SlackRepository'

describe('searchのテスト', () => {
  test('Slackから検索結果を取得できる', async () => {
    const repository = new SlackRepository()
    await expect(repository.search('test')).resolves.toStrictEqual([
      {
        title: 'test',
        link: 'http://example.com',
        description: 'test'
      }
    ])
  })
})
