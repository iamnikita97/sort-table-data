import React from 'react';
import logo from './logo.svg';
import './App.css';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { accountname: 'bombay', negotiatedcontractvalue: 'yellow' },
        { accountname: 'zebra', negotiatedcontractvalue: 'yellow' },
        { accountname: 'monkey', negotiatedcontractvalue: 'spank' },
        { accountname: 'akshay', negotiatedcontractvalue: 'fff' },
      ],
      currentSort: 'up'
    };
    this.onSort = this.onSort.bind(this);
    }

  componentDidMount(){
       this.onSort(null,'accountname');
  }


  onSort(event, sortKey) {
    const { currentSort } = this.state;
    const data = this.state.data;
    let nextSort;
    let sortEq;
    switch (currentSort) {
      case 'down':
        nextSort = 'up';
        sortEq = (a, b) => a[sortKey].localeCompare(b[sortKey]);
        break;
      // case 'up':
      //   nextSort = 'default';
      //   sortEq = (a, b) => a;
      //   break;
      default:
        nextSort = 'down';
        sortEq = (a, b) => b[sortKey].localeCompare(a[sortKey]);
    }
     this.setState({
      data: data.sort(sortEq),
      currentSort: nextSort
    });
  }

  render() {
    var newdata = this.state.data;

    return (
      <>
        <center>
          {this.state.currentSort}
          <table className="m-table">
            <thead>
              <tr>
                <th onClick={e => this.onSort(e, 'accountname')}>AccountName</th>
                <th onClick={e => this.onSort(e, 'negotiatedcontractvalue')}>ContractValue</th>
              </tr>
            </thead>
            <tbody>
              {newdata.map(function (account, index) {
                return (
                  <tr key={index} data-item={account}>
                    <td data-title="Account">{account.accountname}</td>
                    <td data-title="Value">{account.negotiatedcontractvalue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </>
    );
  }
}

export default ParentComponent;

