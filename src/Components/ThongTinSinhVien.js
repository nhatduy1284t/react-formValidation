import React, { Component } from "react";
import Validation from "./Validation";
import { connect } from "react-redux";
class ThongTinSinhVien extends Component {
  state = {
    sinhVien: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChangeInput = (event) => {
  
    let tag = event.target;
    let name = tag.getAttribute("name");
    let checker = new Validation();
    let valid = true;
    let messageError = "";
    let newErrors = { ...this.state.errors };
    let newSinhVien = { ...this.state.sinhVien };
    if (checker.kiemTraRong(tag.value)) {
      valid = false;
      messageError = name + " không được bỏ trống";
    }

    if (!valid) {
      newErrors[name] = messageError;
    }

    if (name === "email") {
      if (!checker.kiemTraEmail(tag.value)) {
        messageError = `${name} phải đúng định dạng`;
      }
    }

    newErrors[name] = messageError;
    newSinhVien[name] = tag.value;

    this.setState({ sinhVien: newSinhVien, errors: newErrors });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    let { errors } = this.state;

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }

    for (let key in this.state.sinhVien) {
      if (this.state.sinhVien[key] === "") {
        valid = false;
      }
    }

    if (!valid) {
      console.log("Sai dữ liệu", this.state);
      return;
    }
    const action = {
      type: "THEM_SINH_VIEN",
      sinhVien: this.state.sinhVien,
    };
    this.props.dispatch(action);
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      sinhVien: newProps.sinhVienChinhSua,
    });
  }

  render() {
    let { maSV, hoTen, email, soDienThoai } = this.state.sinhVien;
    return (
      <div>
        <form className="card" onSubmit={this.handleSubmit}>
          <div className="bg bg-dark text-light pt-2 pb-2">
            <h3 className="ml-3">Thông tin sinh viên</h3>
          </div>
          <div className="card-body row">
            <div className="col-6">
              <div className="form-group">
                <p>Mã SV</p>
                <input
                  value={maSV}
                  className="form-control"
                  name="maSV"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.maSV}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success" type="submit">
              Thêm sinh viên
            </button>
            <button className="btn btn-primary ml-2" type="button" onClick={() => {
              const action = {
                type:'CAP_NHAT',
                sinhVienCapNhat:this.state.sinhVien
              }
              this.props.dispatch(action)
            }}>
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    sinhVienChinhSua: rootReducer.BaiTapFormValidationReducer.sinhVienChinhSua,
  };
};
export default connect(mapStateToProps)(ThongTinSinhVien);
