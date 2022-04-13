Quill.register('modules/imageUploader', ImageUploader);

const myTools = [
  ['bold', 'italic'], // 粗體、斜體
  [{ size: ['small', false, 'large', 'huge'] }], // 文字大小
  ['link'],
  ['image'],
];

const options = {
  debug: 'info',
  modules: {
    // 縮放大小
    imageResize: {
      displaySize: true,
    },
    toolbar: {
      // 工具列列表
      container: myTools,
    },
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            );
          }, 3500);
        });
      },
    },
  },
  placeholder: 'Compose an epic...',
  theme: 'snow',
};

const editor = new Quill('#editor', options);
