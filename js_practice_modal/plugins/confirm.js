$.confirm = function (options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: '400px',
      closeable: false,
      content: options.content,
      onClose() {
        modal.destroy();
      },
      footerButtons: [
        {
          text: 'Cancel',
          handler() {
            modal.close();
            reject()
          }
        },
        {
          text: 'Delete',
          type: 'danger',
          handler() {
            modal.close();
            resolve()
          }
        }
      ]
    });
    setTimeout(() => {
      modal.open()
    }, 100)
  })
}
