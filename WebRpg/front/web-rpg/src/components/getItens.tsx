import Axios from "axios";
import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default class GetItens extends React.Component {
  state = {
    itens: [],
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const getUrl = "http://localhost:3001/api";
    Axios.get(getUrl).then((res) => {
      this.setState({ itens: res.data });
    });
  }

  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th className="emptyBorda"></th>
              <th className="cadernoBorda"></th>
              <th scope="row">nome</th>
              <th scope="row">descrição</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itens.map((item) => (
              <tr className="content">
                <th className="emptyBorda"></th>
                <th className="cadernoBorda"></th>
                <th className="linhaBorda">{item["nomes"]}</th>
                <th className="linhaBorda">{item["ativos"]}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
/*
export default function GetItens() {
  const [itens, setItens] = useState([]);

  Axios.get(getUrl).then((res) => {
    setItens(res.data);
  });

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th className="emptyBorda"></th>
            <th></th>
            <th scope="row">nome</th>
            <th scope="row">descrição</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr className="content" key={item["_id"]}>
              <th className="emptyBorda"></th>
              <th className="cadernoBorda"></th>
              <th>{item["nomes"]}</th>
              <th>{item["ativos"]}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
*/
