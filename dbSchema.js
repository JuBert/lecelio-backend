let db = {
  users: [
    {
      userId: '0LDUNFcTEdU17b0GFwxjkhab3Wc2',
      userHanble: 'user',
      email: 'user@email.com',
      imageUrl: 'image/izfuzehf/oizhef',
      bio: 'Hi my name is John, nice to meet you',
      website: 'johndoe.com',
      location: 'London, UK',
      createdAt: '2020-05-29T12:30:25.395Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  wines: [
    {
      userHanble: 'user',
      name: 'bottle 1',
      variant: 'blanc',
      vintage: '2000',
      createdAt: '2020-05-29T12:30:25.395Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      wineId: 'gqfJKTvacfrnKCbBZvCB',
      body: 'hey good stuff',
      createdAt: '2020-05-29T12:30:25.395Z',
    },
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true / false',
      wineId: 'gqfJKTvacfrnKCbBZvCB',
      type: 'like / comment',
      createdAt: '2020-05-29T12:30:25.395Z',
    },
  ],
};
