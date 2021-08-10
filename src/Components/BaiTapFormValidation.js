import React, { Component } from 'react'
import TableSinhVien from './TableSinhVien'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class BaiTapFormValidation extends Component {
    render() {
        return (
            <div className="container">
          
                <ThongTinSinhVien/>
                <TableSinhVien/>
            </div>
        )
    }
}
