import * as React from 'react'
import styled from 'styled-components'

const itemList = [
    {id: 1, material: "鉄", sizeHeight: 20, sizeWidth: 20, sizeLength: 20, weight: 20.00, price: 3000, itemInv: 30},
    {id: 2, material: "木材", sizeHeight: 1, sizeWidth: 20, sizeLength: 200, weight: 20.00, price: 2000, itemInv: 30},
    {id: 3, material: "銅", sizeHeight: 0.1, sizeWidth: 30, sizeLength: 300, weight: 20.00, price: 4000, itemInv: 30}
];

export const ItemTable:  React.FC = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>商品ID</th>
                        <th>素材</th>
                        <th>高さ(cm)</th>
                        <th>幅(cm)</th>
                        <th>長さ(cm)</th>
                        <th>重さ(kg)</th>
                        <th>価格(円)</th>
                        <th>在庫(個)</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.material}</td>
                            <td>{item.sizeHeight}</td>
                            <td>{item.sizeWidth}</td>
                            <td>{item.sizeLength}</td>
                            <td>{item.weight}</td>
                            <td>{item.price}</td>
                            <td>{item.itemInv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}