// TODO: Make this a much nicer popup instead of the default windows one (Material UI snackbar)
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?'
  )
  if (answer === true) {
    window.location.reload()
  }
}
