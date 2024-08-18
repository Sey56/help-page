function showContent(id, element) {
    console.log("showContent called with id:", id);
    var sections = document.querySelectorAll('.content section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    var links = document.querySelectorAll('.sidebar a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    element.classList.add('active');
}


function toggleContent(id) {
    console.log("toggleContent called with id:", id);
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


// Make the sidebar resizable
const sidebar = document.getElementById('sidebar');
const resizer = document.createElement('div');
resizer.className = 'resizer';
sidebar.appendChild(resizer);

resizer.addEventListener('mousedown', function(e) {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
});

function resize(e) {
    const newWidth = e.pageX - sidebar.getBoundingClientRect().left;
    if (newWidth > 100 && newWidth < 500) { // Set minimum and maximum width
        sidebar.style.width = newWidth + 'px';
        document.querySelector('.content').style.marginLeft = newWidth + 20 + 'px'; // Adjust content margin
    }
}

function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
}