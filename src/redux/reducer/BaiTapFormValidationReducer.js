const stateDefault = {
  mangSinhVien: [
    { maSV: "1", hoTen: "A", soDienThoai: "0938111111", email: "nguyenvana@gmail.com" },
    { maSV: "2", hoTen: "B", soDienThoai: "0969696969", email: "nguyenvanb@gmail.com" },
  ],
  sinhVienChinhSua: {},
};

export const BaiTapFormValidationReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      let mangSinhVien = [...state.mangSinhVien];
      mangSinhVien.push(action.sinhVien);
      state.mangSinhVien = mangSinhVien;
      return { ...state };
    }

    case "XOA_SINH_VIEN": {
      let { mangSinhVien } = state;
      let index = mangSinhVien.findIndex((sinhVien) => sinhVien.maSV === action.maSV);

      mangSinhVien.splice(index, 1);
      state.mangSinhVien = [...mangSinhVien];

      return { ...state };
    }

    case "CHINH_SUA": {
      state.sinhVienChinhSua = action.sinhVienChinhSua;

      return { ...state };
    }

    case "CAP_NHAT": {
      let sinhVienCapNhat = state.mangSinhVien.find(
        (sinhVien) => sinhVien.maSV === action.sinhVienCapNhat.maSV
      );
      if (sinhVienCapNhat) {
        for (let key in action.sinhVienCapNhat) {
          sinhVienCapNhat[key] = action.sinhVienCapNhat[key];
        }
      }
    
      state.mangSinhVien = [...state.mangSinhVien];
      return { ...state };
    }
    case 'TIM_KIEM' : {
      state.mangSinhVien=[...action.mangSinhVienFilter];
  
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
