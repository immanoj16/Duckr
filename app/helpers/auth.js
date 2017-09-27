export default function auth() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({
        name: 'Manoj Kumar',
        avatar: '',
        uid: 'immanoj16',
      })
    }, 2000)
  });
}
