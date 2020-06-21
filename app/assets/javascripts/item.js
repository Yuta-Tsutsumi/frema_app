$('#image-box').on('change', '.js-file', function(e) {
  const targetIndex = $(this).parent().data('index');
  // ファイルのブラウザ上でのURLを取得する
  const file = e.target.files[0];
  const blobUrl = window.URL.createObjectURL(file);

  // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
  if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
    img.setAttribute('src', blobUrl);
  } else {  // 新規画像追加の処理
    $('#previews').append(buildImg(targetIndex, blobUrl));
    // fileIndexの先頭の数字を使ってinputを作る
    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
  }
});
