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

export function checkIfAuthed (store) {
  // ignore firbase.
  return store.getState().isAuthed
}
