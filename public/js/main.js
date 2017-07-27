$(document).ready(() => {
  $('.btn-delete').on('click', e => {
    let target = $(e.target);
    const id = target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/delete/${id}`,
      success: res => location.href = '/customers'
    });
  });
});
