$(document).ready(function () {
    if ($('#sidebar').length === 0) {
        return;
    }

    let actionItemElement = document.createElement('span');
    actionItemElement.className = 'action_item';

    let linkElement = document.createElement('a');
    linkElement.id = 'toggle_filters';
    linkElement.href = '#';
    linkElement.className = 'is-toggle';

    let labelTextNode = document.createTextNode("Sidebar");

    linkElement.appendChild(labelTextNode);
    actionItemElement.appendChild(linkElement);

    $('div.action_items').append(actionItemElement);

    let aaContent = $('#active_admin_content');

    // when we don't request a filtered collection, we hide the sidebar
    if (!window.location.search.includes('commit=Filter')) {
        aaContent.removeClass('with_sidebar');
        $(linkElement).removeClass('is-toggle');
    }

    $(linkElement).click(function () {
        aaContent.toggleClass('with_sidebar');
        $(this).toggleClass('is-toggle');
    })
})