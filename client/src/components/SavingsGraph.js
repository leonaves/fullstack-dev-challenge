import React, { Component } from "react";
import { graphql, QueryRenderer } from 'react-relay';

import environment from "../relay/environment";
import DisplayGraph from "./DisplayGraph";

class SavingsGraph extends Component {
  render() {
    const { initial, monthly, rate } = this.props;

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SavingsGraphQuery($initial: Int!, $monthly: Int!, $rate: Float!) {
            savings: getMonthlySavings(initial: $initial, monthly: $monthly, interestRate: $rate) {
              month
              amount
            }
          }
        `}
        variables={{ initial, monthly, rate}}
        render={({ error, props }) => {
          console.log(props);
          if (error) {
            return <div>Error!</div>;
          } else if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <DisplayGraph data={props.savings} />
          );
        }}
      />
    );
  }
}

export default SavingsGraph;
