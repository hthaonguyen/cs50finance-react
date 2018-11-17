import React from "react"
import {request} from "../utils/api-utils";
import {Col, Row, Table} from "reactstrap";
import "./HomePageBody.css"

class HomePageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
    }

    async componentDidMount() {
        const [response, error] = await request("/holding", "GET");
        if (response && response.ok) {
            let data = await response.json();
            this.setState({data: data});
        } else if (error) {
            alert(error.error);
        }
    }

    rows() {
        let array = [];
        for (let i = 0; i < this.state.body.data.length; i++) {
            let row = <tr>
                <td>{this.state.data.data[i].symbol}</td>
                <td>{this.state.data.data[i].shares}</td>
                <td>{this.state.data.data[i].price}</td>
                <td>{this.state.data.data[i].total}</td>
            </tr>;
            array.push(row)
        }
        return (array);

    }

    render() {
        if (this.state.data === null) {
            return null;
        } else {
            return (
                <Row>
                    <Col lg={8} className="table-home " >
                        <Table striped>
                            <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Shares</th>
                                <th>Price</th>
                                <th>Transacted</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.rows()}
                            <tr>
                                <td>Cash</td>
                                <td></td>
                                <td></td>
                                <td>{this.state.data.cash}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="font-weight-bold">{this.state.data.holding}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )
        }
    }
}

export default HomePageBody;