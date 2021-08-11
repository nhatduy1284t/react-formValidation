import React, { Component } from "react";
import { connect } from "react-redux";
class TableSinhVien extends Component {
  state = {
    isSearching: false,
    valueSearching: "",
    mangSinhVienFilter: [],
  };
  renderMangSinhVien = () => {
    return this.props.mangSinhVien.map((sinhVien, index) => {
      return (
        <tr>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-outline-danger mr-2"
              onClick={() => {
                const action = {
                  type: "XOA_SINH_VIEN",
                  maSV: sinhVien.maSV,
                };
                this.props.dispatch(action);
              }}
            >
              Xoá
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                const action = {
                  type: "CHINH_SUA",
                  sinhVienChinhSua: sinhVien,
                };
                this.props.dispatch(action);
              }}
            >
              Chỉnh sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  renderMangSinhVienFilter = () => {
    let mangSinhVienFilter = this.state.mangSinhVienFilter.filter((sinhVien) =>
      sinhVien.hoTen.toUpperCase().includes(this.state.valueSearching.toUpperCase())
    );

    return mangSinhVienFilter.map((sinhVien, index) => {
      return (
        <tr>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-outline-danger mr-2"
              onClick={() => {
                const action = {
                  type: "XOA_SINH_VIEN",
                  maSV: sinhVien.maSV,
                };
                this.props.dispatch(action);
              }}
            >
              Xoá
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                const action = {
                  type: "CHINH_SUA",
                  sinhVienChinhSua: sinhVien,
                };
                this.props.dispatch(action);
              }}
            >
              Chỉnh sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  handleChangeSearch = (event) => {
    let valueSearch = event.target.value;
    // let mangSinhVienFilter = this.props.mangSinhVien.filter((sinhVien) => sinhVien.hoTen.toUpperCase().includes(valueSearch.toUpperCase()));
    let mangSinhVienFilter = this.props.mangSinhVien.filter((sinhVien) =>
      sinhVien.hoTen.toUpperCase().includes(valueSearch.toUpperCase())
    );

    this.setState(
      {
        isSearching: true,
        valueSearching: valueSearch,
        mangSinhVienFilter: [...mangSinhVienFilter],
      }
    );
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      mangSinhVienFilter: newProps.mangSinhVien,
    });
  }

  render() {
    return (
      <table className="table mt-3">
        <thead className="bg-dark text-light">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={this.handleChangeSearch}
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fa fa-search" />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        {/* <tbody>{this.state.isSearching ? '' :this.renderMangSinhVien()}</tbody> */}
        <tbody>
          {this.state.isSearching ? this.renderMangSinhVienFilter() : this.renderMangSinhVien()}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    mangSinhVien: rootReducer.BaiTapFormValidationReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps)(TableSinhVien);