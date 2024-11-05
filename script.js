function showSection(sectionId) {
    // ซ่อนทุก Section ก่อน
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // แสดง Section ที่เลือก
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
