const products = [
  {
    id: 'deaa27b0-9b04-4441-a3a0-017891fb6b91',
    name: 'Widget 1',
    cost: 7.5,
    img: {
      alt:
        'Alt text should describe not only the content of the image, but also relate it to the context in which it is displayed. In this instance, it does neither because it is a placeholder for Widget 1',
      src: {
        x1:
          'https://images.unsplash.com/photo-1474107433958-c6374e32ec1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=560&q=80',
        x2:
          'https://images.unsplash.com/photo-1474107433958-c6374e32ec1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80'
      }
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, ligula in varius rutrum, leo ante ultricies diam, vitae fringilla tellus risus finibus orci. Etiam sed elit a orci facilisis condimentum. Integer eget posuere neque. Donec molestie eros sapien, vitae vestibulum lectus finibus eu. Nullam libero purus, lacinia in rutrum non, cursus a nisi. Vivamus ut felis vitae ex pretium interdum id id magna. Suspendisse sit amet diam dignissim, gravida sem eget, faucibus risus. Vivamus nisi libero, consequat ac convallis at, varius non metus. Nam pulvinar auctor nisl, ac tincidunt risus consectetur ultricies. Maecenas tempor dui sed quam mattis dapibus. Nunc molestie tincidunt eleifend. Sed eu eleifend eros. Morbi ut eros in massa convallis dictum. Nam ac nisi metus.',
    specs: [
      { label: 'Dimensions', value: '14 x 20 x 5' },
      { label: 'Weight', value: '4lbs' },
      { label: 'Capacity', value: '10L' }
    ]
  },
  {
    id: 'b9e211fa-f72c-410a-aa67-c4c52c18a420',
    name: 'Widget 2',
    cost: 2.4,
    img: {
      alt:
        'Alt text should describe not only the content of the image, but also relate it to the context in which it is displayed. In this instance, it does neither because it is a placeholder for Widget 2',
      src: {
        x1:
          'https://images.unsplash.com/photo-1443728328425-5d4ec72baaa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=560&q=80',
        x2:
          'https://images.unsplash.com/photo-1443728328425-5d4ec72baaa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
      }
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, ligula in varius rutrum, leo ante ultricies diam, vitae fringilla tellus risus finibus orci. Etiam sed elit a orci facilisis condimentum. Integer eget posuere neque. Donec molestie eros sapien, vitae vestibulum lectus finibus eu. Nullam libero purus, lacinia in rutrum non, cursus a nisi. Vivamus ut felis vitae ex pretium interdum id id magna. Suspendisse sit amet diam dignissim, gravida sem eget, faucibus risus. Vivamus nisi libero, consequat ac convallis at, varius non metus. Nam pulvinar auctor nisl, ac tincidunt risus consectetur ultricies. Maecenas tempor dui sed quam mattis dapibus. Nunc molestie tincidunt eleifend. Sed eu eleifend eros. Morbi ut eros in massa convallis dictum. Nam ac nisi metus.',
    specs: [
      { label: 'Dimensions', value: '14 x 20 x 5' },
      { label: 'Weight', value: '4lbs' },
      { label: 'Capacity', value: '10L' }
    ]
  },
  {
    id: '54f3d10d-074a-44e1-a899-337211b5dab0',
    name: 'Widget 3',
    cost: 5.0,
    img: {
      alt:
        'Alt text should describe not only the content of the image, but also relate it to the context in which it is displayed. In this instance, it does neither because it is a placeholder for Widget 3',
      src: {
        x1:
          'https://images.unsplash.com/photo-1527645746751-d4dc7aa53163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=560&q=80',
        x2:
          'https://images.unsplash.com/photo-1527645746751-d4dc7aa53163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80'
      }
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, ligula in varius rutrum, leo ante ultricies diam, vitae fringilla tellus risus finibus orci. Etiam sed elit a orci facilisis condimentum. Integer eget posuere neque. Donec molestie eros sapien, vitae vestibulum lectus finibus eu. Nullam libero purus, lacinia in rutrum non, cursus a nisi. Vivamus ut felis vitae ex pretium interdum id id magna. Suspendisse sit amet diam dignissim, gravida sem eget, faucibus risus. Vivamus nisi libero, consequat ac convallis at, varius non metus. Nam pulvinar auctor nisl, ac tincidunt risus consectetur ultricies. Maecenas tempor dui sed quam mattis dapibus. Nunc molestie tincidunt eleifend. Sed eu eleifend eros. Morbi ut eros in massa convallis dictum. Nam ac nisi metus.',
    specs: [
      { label: 'Dimensions', value: '14 x 20 x 5' },
      { label: 'Weight', value: '4lbs' },
      { label: 'Capacity', value: '10L' }
    ]
  },
  {
    id: 'e25beb26-4417-4f34-9e18-5bf7a9574ec1',
    name: 'Widget 4',
    cost: 9.0,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, ligula in varius rutrum, leo ante ultricies diam, vitae fringilla tellus risus finibus orci. Etiam sed elit a orci facilisis condimentum. Integer eget posuere neque. Donec molestie eros sapien, vitae vestibulum lectus finibus eu. Nullam libero purus, lacinia in rutrum non, cursus a nisi. Vivamus ut felis vitae ex pretium interdum id id magna. Suspendisse sit amet diam dignissim, gravida sem eget, faucibus risus. Vivamus nisi libero, consequat ac convallis at, varius non metus. Nam pulvinar auctor nisl, ac tincidunt risus consectetur ultricies. Maecenas tempor dui sed quam mattis dapibus. Nunc molestie tincidunt eleifend. Sed eu eleifend eros. Morbi ut eros in massa convallis dictum. Nam ac nisi metus.',
    img: {
      alt:
        'Alt text should describe not only the content of the image, but also relate it to the context in which it is displayed. In this instance, it does neither because it is a placeholder for Widget 4',
      src: {
        x1:
          'https://images.unsplash.com/photo-1527960003563-25c01ab83991?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=560&q=80',
        x2:
          'https://images.unsplash.com/photo-1527960003563-25c01ab83991?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80'
      }
    },
    specs: [
      { label: 'Dimensions', value: '14 x 20 x 5' },
      { label: 'Weight', value: '4lbs' },
      { label: 'Capacity', value: '10L' }
    ]
  }
]

export default products
