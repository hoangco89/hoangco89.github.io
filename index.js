
//--- ham lay json cua chu de
async function fetchJsonChude() {
    const url = `Jschude/js_titleIdUrl_chude.json`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Không tìm thấy JSON");
            return await res.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

let bien1 = null;

async function loadData() {
    const r = await fetch("x.json");
    bien1 = await r.json();
    console.log("Đã load:", bien1);
}

loadData();

//--- load chude vao selectChude
fetchJsonChude().then(data => {
    //console.log(data);
    data.forEach((item, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = item['title'];
        selectChude.appendChild(option);
    });

    // --- Khôi phục giá trị đã lưu, chu y phai nam trong ham fetchJsonChude() ---
    const savedValue = localStorage.getItem("selectChudeValue");

    if (savedValue !== null) {
        selectChude.value = savedValue;
    } else {
        // Chưa lưu → mặc định index 2
        if (selectChude.options.length > 2) {
            selectChude.selectedIndex = 2;
        }
    }
}); // end fetchJsonChude().then

//ham tao menu videoSelect theo chude da chon
async function taomenu_videoSelect(){
    //let id_ofcddc = data[selectChude.value];  // lay du lieu json cua chude da chon
    //alert(id_ofcddc);
    fetchJsonChude().then(data => {
        console.log('ttttt',data[selectChude.value]['id']);
        const id_ofcddc = data[selectChude.value]['id'];
        const url = `Jschude/${id_ofcddc}.json`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Không tìm thấy JSON videoSelect");
                }
                return response.json();
            })
            .then(data => {
                // Xóa các tùy chọn hiện có trong videoSelect
                //const videoSelect = document.getElementById("videoSelect");
                videoSelect.innerHTML = "";
                data.forEach((item, index) => {
                    const option = document.createElement("option");
                    option.value = item['id'];
                    option.textContent = index + ". " + item['title'];
                    videoSelect.appendChild(option);
                });
                //videoSelect.selectedIndex = 1; // Mặc định chọn mục đầu tiên
                //videochon.textContent = data[videoSelect.value]['id'];
            });
    }).catch(err => {
        console.error(err);
    });
}
taomenu_videoSelect(); // goi lan dau

// --- Lưu khi thay đổi va tao menu videoSelect ---
selectChude.addEventListener("change", () => {
    localStorage.setItem("selectChudeValue", selectChude.value);
    //moi lan thay doi chude thi goi ham tao menu videoSelect
    taomenu_videoSelect();
    
});

// --- Lưu khi thay đổi videoSelect ---
videoSelect.addEventListener("change", () => {
    //localStorage.setItem("selectChudeValue", selectChude.value);
    //moi lan thay doi chude thi goi ham tao menu videoSelect
    videochon.textContent = videoSelect.value;

});
